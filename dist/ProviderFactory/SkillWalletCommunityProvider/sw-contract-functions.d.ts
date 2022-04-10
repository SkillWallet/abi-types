import { CallOverrides } from "ethers";
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */
export declare type SkillWalletCommunityContractFunctions1 = [] | [SkillWalletCommunityContractFunctions] | [SkillWalletCommunityContractFunctions, SkillWalletCommunityContractEvents];
export declare type SWEvent = {
    event: SkillWalletCommunityContractEventType;
    args: any;
}[];
export interface SkillWalletCommunityContractFunctions {
    activeMembersCount: (overrides?: CallOverrides) => Promise<number>;
    addNewCoreTeamMembers: (member: string, overrides?: CallOverrides) => Promise<{
        wait: () => Promise<SkillWalletCommunityContractEvents>;
    }>;
    coreTeamMembersCount: (overrides?: CallOverrides) => Promise<number>;
    getCoreTeamMembers: (overrides?: CallOverrides) => Promise<string[]>;
    getMemberAddresses: (overrides?: CallOverrides) => Promise<string[]>;
    getMembers: (overrides?: CallOverrides) => Promise<number[]>;
    getSkillWalletAddress: (overrides?: CallOverrides) => Promise<string>;
    isCoreTeamMember: (overrides?: CallOverrides) => Promise<boolean>;
    isMember: (overrides?: CallOverrides) => Promise<boolean>;
    isPermissioned: (overrides?: CallOverrides) => Promise<boolean>;
    joinNewMember: (uri: string, role: number, overrides?: CallOverrides) => Promise<{
        wait: () => Promise<SkillWalletCommunityContractEvents>;
    }>;
    memberAddresses: (overrides?: CallOverrides) => Promise<string>;
    metadataUri: (overrides?: CallOverrides) => Promise<string>;
    migratedFrom: (overrides?: CallOverrides) => Promise<string>;
    migratedTo: (overrides?: CallOverrides) => Promise<string>;
    owner: (overrides?: CallOverrides) => Promise<string>;
    setMetadataUri: (uri: string, overrides?: CallOverrides) => Promise<{
        wait: () => Promise<SkillWalletCommunityContractEvents>;
    }>;
    setPermissionBadgeAddress: (_permissionBadgeAddr: string, overrides?: CallOverrides) => Promise<{
        wait: () => Promise<SkillWalletCommunityContractEvents>;
    }>;
    skillWallet: (overrides?: CallOverrides) => Promise<string>;
    skillWalletIds: (overrides?: CallOverrides) => Promise<number>;
    template: (overrides?: CallOverrides) => Promise<number>;
    testMapping: (overrides?: CallOverrides) => Promise<number>;
    totalMembersAllowed: (overrides?: CallOverrides) => Promise<number>;
    version: (overrides?: CallOverrides) => Promise<number>;
}
export interface SkillWalletCommunityContractEvents {
    events: SWEvent;
}
export declare enum SkillWalletCommunityContractEventType {
    CoreTeamMemberAdded = "CoreTeamMemberAdded",
    MemberAdded = "MemberAdded"
}