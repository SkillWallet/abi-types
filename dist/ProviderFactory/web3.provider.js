"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
const utils_1 = require("ethers/lib/utils");
function NoEventException(value) {
    this.value = value;
    this.message = "No event found!";
    // eslint-disable-next-line func-names
    this.toString = function () {
        return this.value + this.message;
    };
}
class Web3ProviderExtras {
    constructor(extras) {
        if (extras === null || extras === void 0 ? void 0 : extras.event) {
            this.event = extras === null || extras === void 0 ? void 0 : extras.event;
        }
        if (extras === null || extras === void 0 ? void 0 : extras.beforeRequest) {
            this.beforeRequest = extras.beforeRequest;
        }
        else {
            this.beforeRequest = (_) => Promise.resolve(_);
        }
        if (extras === null || extras === void 0 ? void 0 : extras.afterRequest) {
            this.afterRequest = extras.afterRequest;
        }
        else {
            this.afterRequest = (_) => Promise.resolve(_);
        }
        if (extras === null || extras === void 0 ? void 0 : extras.transactionState) {
            this.transactionState = extras.transactionState;
        }
        else {
            this.transactionState = (_) => null;
        }
    }
}
exports.Web3ProviderExtras = Web3ProviderExtras;
const waitForTransaction = (fnCallResult, extras) => __awaiter(void 0, void 0, void 0, function* () {
    const getEvent = (waitResult) => {
        if (extras === null || extras === void 0 ? void 0 : extras.event) {
            const { events } = waitResult;
            const foundEvent = events.find((e) => e.event === extras.event);
            if (!foundEvent) {
                throw NoEventException({
                    code: -32603,
                    message: "Internal JSON-RPC error.",
                    data: {
                        code: 3,
                        data: "",
                        message: `SkillWallet:${extras.event}EventMissing`,
                    },
                });
            }
            return foundEvent.args;
        }
        return waitResult;
    };
    // @ts-ignore
    if (fnCallResult === null || fnCallResult === void 0 ? void 0 : fnCallResult.then) {
        extras.transactionState("started");
        const tx = yield fnCallResult;
        extras.transactionState("waiting", tx);
        if (tx === null || tx === void 0 ? void 0 : tx.wait) {
            const eventResult = getEvent(yield tx.wait());
            extras.transactionState("done", eventResult);
            return extras.afterRequest(eventResult);
        }
        return extras.afterRequest(tx);
    }
    return extras.afterRequest(fnCallResult);
});
const createContractProxy = (contract, extras) => {
    return new Proxy(utils_1.shallowCopy(contract), {
        get(target, prop, receiver) {
            if (!(prop in target)) {
                return undefined;
            }
            if (typeof target[prop] === "function") {
                return new Proxy(target[prop], {
                    apply(fn, thisArg, args) {
                        return waitForTransaction(Reflect.apply(fn, thisArg, args), extras);
                    },
                });
            }
            return Reflect.get(target, prop, receiver);
        },
    });
};
exports.Web3ContractProvider = (addressOrName, contractInterface, extras) => __awaiter(void 0, void 0, void 0, function* () {
    extras = new Web3ProviderExtras(extras);
    yield extras.beforeRequest();
    // @ts-ignore
    const provider = new ethers_1.ethers.providers.Web3Provider(window === null || window === void 0 ? void 0 : window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers_1.ethers.Contract(addressOrName, contractInterface, signer);
    const proxy = createContractProxy(contract, extras);
    return Object.assign(Object.assign({}, proxy), { contract });
});
//# sourceMappingURL=web3.provider.js.map