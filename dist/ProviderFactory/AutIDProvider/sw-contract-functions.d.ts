import { CallOverrides } from "ethers";
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */
export declare type AutIDContractFunctions1 = [] | [AutIDContractFunctions] | [AutIDContractFunctions, AutIDContractEvents];
export declare type SWEvent = {
    event: AutIDContractEventType;
    args: any;
}[];
export interface AutIDContractFunctions {
    addDiscordIDToAutID: (discordID: string, overrides?: CallOverrides) => Promise<{
        wait: () => Promise<AutIDContractEvents>;
    }>;
    approve: (to: string, tokenId: number, overrides?: CallOverrides) => Promise<{
        wait: () => Promise<AutIDContractEvents>;
    }>;
    autIDToDiscordID: (argument_0: number, overrides?: CallOverrides) => Promise<string>;
    autIDUsername: (argument_0: string, overrides?: CallOverrides) => Promise<string>;
    balanceOf: (owner: string, overrides?: CallOverrides) => Promise<number>;
    discordIDToAddress: (argument_0: string, overrides?: CallOverrides) => Promise<string>;
    editCommitment: (communityExtension: string, newCommitment: number, overrides?: CallOverrides) => Promise<{
        wait: () => Promise<AutIDContractEvents>;
    }>;
    getApproved: (tokenId: number, overrides?: CallOverrides) => Promise<string>;
    getAutIDByOwner: (autIDOwner: string, overrides?: CallOverrides) => Promise<number>;
    getCommunities: (autIDHolder: string, overrides?: CallOverrides) => Promise<{
        communities: string[];
    }>;
    /**
     * Response type names are:
     *
     * communityExtension: string
     * role: number
     * commitment: number
     * isActive: boolean
     */
    getCommunityData: (autIDHolder: string, communityExtension: string, overrides?: CallOverrides) => Promise<[string, number, number, boolean]>;
    isApprovedForAll: (owner: string, operator: string, overrides?: CallOverrides) => Promise<boolean>;
    joinCommunity: (role: number, commitment: number, communityExtension: string, overrides?: CallOverrides) => Promise<{
        wait: () => Promise<AutIDContractEvents>;
    }>;
    mint: (username: string, url: string, role: number, commitment: number, communityExtension: string, overrides?: CallOverrides) => Promise<{
        wait: () => Promise<AutIDContractEvents>;
    }>;
    name: (overrides?: CallOverrides) => Promise<string>;
    ownerOf: (tokenId: number, overrides?: CallOverrides) => Promise<string>;
    safeTransferFrom: (from: string, to: string, tokenId: number, _data: string, overrides?: CallOverrides) => Promise<{
        wait: () => Promise<AutIDContractEvents>;
    }>;
    setApprovalForAll: (operator: string, approved: boolean, overrides?: CallOverrides) => Promise<{
        wait: () => Promise<AutIDContractEvents>;
    }>;
    setMetadataUri: (metadataUri: string, overrides?: CallOverrides) => Promise<{
        wait: () => Promise<AutIDContractEvents>;
    }>;
    supportsInterface: (interfaceId: string, overrides?: CallOverrides) => Promise<boolean>;
    symbol: (overrides?: CallOverrides) => Promise<string>;
    tokenURI: (tokenId: number, overrides?: CallOverrides) => Promise<string>;
    transferFrom: (from: string, to: string, tokenId: number, overrides?: CallOverrides) => Promise<{
        wait: () => Promise<AutIDContractEvents>;
    }>;
    withdraw: (communityExtension: string, overrides?: CallOverrides) => Promise<{
        wait: () => Promise<AutIDContractEvents>;
    }>;
}
export interface AutIDContractEvents {
    events: SWEvent;
}
export declare enum AutIDContractEventType {
    Approval = "Approval",
    ApprovalForAll = "ApprovalForAll",
    AutIDCreated = "AutIDCreated",
    CommitmentUpdated = "CommitmentUpdated",
    CommunityJoined = "CommunityJoined",
    CommunityWithdrown = "CommunityWithdrown",
    DiscordIDConnectedToAutID = "DiscordIDConnectedToAutID",
    MetadataUriSet = "MetadataUriSet",
    Transfer = "Transfer"
}
