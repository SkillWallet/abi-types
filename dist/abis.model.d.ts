export interface JsonFragmentType {
    name?: string;
    readonly indexed?: boolean;
    readonly type?: string;
    readonly internalType?: any;
    readonly components?: ReadonlyArray<JsonFragmentType>;
}
export interface JsonFragment {
    readonly name?: string;
    readonly type?: string;
    readonly anonymous?: boolean;
    readonly payable?: boolean;
    readonly constant?: boolean;
    readonly stateMutability?: string;
    readonly inputs?: ReadonlyArray<JsonFragmentType>;
    readonly outputs?: ReadonlyArray<JsonFragmentType>;
    readonly gas?: string;
}
