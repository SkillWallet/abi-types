import { Contract, ContractInterface } from "ethers";
declare type InterceptorFn = (...args: any) => Promise<void>;
export declare class Web3ProviderExtras<EventTypes> {
    event: EventTypes;
    beforeRequest: InterceptorFn;
    afterRequest: InterceptorFn;
    transactionState: (state: "started" | "rejected" | "waiting" | "done", ...args: any) => void;
    constructor(extras?: Web3ProviderExtras<EventTypes>);
}
export declare const Web3ContractProvider: <EventTypes, ContractFunctions>(addressOrName: string, contractInterface: ContractInterface, extras?: Web3ProviderExtras<EventTypes>) => Promise<ContractFunctions & {
    contract: Contract;
}>;
export {};
