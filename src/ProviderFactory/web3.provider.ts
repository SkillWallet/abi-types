import { Contract, ContractInterface, ethers } from "ethers";
import { shallowCopy } from "ethers/lib/utils";

function NoEventException(value: any) {
  this.value = value;
  this.message = "No event found!";
  // eslint-disable-next-line func-names
  this.toString = function () {
    return this.value + this.message;
  };
}

type InterceptorFn = (...args: any) => Promise<void>;

export class Web3ProviderExtras<EventTypes> {
  event: EventTypes;
  beforeRequest: InterceptorFn;
  afterRequest: InterceptorFn;
  transactionState: (
    state: "started" | "rejected" | "waiting" | "done",
    ...args: any
  ) => void;

  constructor(extras?: Web3ProviderExtras<EventTypes>) {
    if (extras?.event) {
      this.event = extras?.event;
    }
    if (extras?.beforeRequest) {
      this.beforeRequest = extras.beforeRequest;
    } else {
      this.beforeRequest = (_) => Promise.resolve(_);
    }
    if (extras?.afterRequest) {
      this.afterRequest = extras.afterRequest;
    } else {
      this.afterRequest = (_) => Promise.resolve(_);
    }
    if (extras?.transactionState) {
      this.transactionState = extras.transactionState;
    } else {
      this.transactionState = (_) => null;
    }
  }
}

const waitForTransaction = async <EventTypes>(
  fnCallResult: Promise<{ wait: () => Promise<EventTypes> }>,
  extras: Web3ProviderExtras<EventTypes>
) => {
  const getEvent = (waitResult: EventTypes) => {
    if (extras?.event) {
      const { events } = waitResult as unknown as EventTypes as any;
      const foundEvent = events.find((e: any) => e.event === extras.event);
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
  if (fnCallResult?.then) {
    extras.transactionState("started");
    const tx = await fnCallResult;
    extras.transactionState("waiting", tx);
    if (tx?.wait) {
      const eventResult = getEvent(await tx.wait());
      extras.transactionState("done", eventResult);
      return extras.afterRequest(eventResult);
    }
    return extras.afterRequest(tx);
  }
  return extras.afterRequest(fnCallResult);
};

const createContractProxy = <EventTypes, ContractFunctions>(
  contract: Contract,
  extras: Web3ProviderExtras<EventTypes>
) => {
  return new Proxy<any>(shallowCopy(contract as unknown as ContractFunctions), {
    get(target: any, prop: string, receiver: any) {
      if (!(prop in target)) {
        return undefined;
      }
      if (typeof target[prop] === "function") {
        return new Proxy(target[prop], {
          apply(fn, thisArg, args) {
            return waitForTransaction<EventTypes>(
              Reflect.apply(fn, thisArg, args),
              extras
            );
          },
        });
      }
      return Reflect.get(target, prop, receiver);
    },
  });
};

export const Web3ContractProvider = async <EventTypes, ContractFunctions>(
  addressOrName: string,
  contractInterface: ContractInterface,
  extras: Web3ProviderExtras<EventTypes> = new Web3ProviderExtras()
) => {
  // @ts-ignore
  if (!window.ethereum.selectedAddress) {
    // @ts-ignore
    await window.ethereum.enable();
  }

  // change network or something
  await extras.beforeRequest();

  // @ts-ignore
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract: Contract = new ethers.Contract(
    addressOrName,
    contractInterface,
    signer
  );
  const proxy = createContractProxy<EventTypes, ContractFunctions>(
    contract,
    extras
  );

  return {
    ...proxy,
    contract,
  } as ContractFunctions & { contract: Contract };
};
