import { CallOverrides } from "ethers";
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */
export declare type CommunityExtensionContractFunctions1 = [] | [CommunityExtensionContractFunctions] | [CommunityExtensionContractFunctions, CommunityExtensionContractEvents];
export declare type SWEvent = {
    event: CommunityExtensionContractEventType;
    args: any;
}[];
export interface CommunityExtensionContractFunctions {
    addActivitiesAddress: (activityAddr: string, overrides?: CallOverrides) => Promise<{
        wait: () => Promise<CommunityExtensionContractEvents>;
    }>;
    addURL: (_url: string, overrides?: CallOverrides) => Promise<{
        wait: () => Promise<CommunityExtensionContractEvents>;
    }>;
    autIDAddr: (overrides?: CallOverrides) => Promise<string>;
    getActivitiesWhitelist: (overrides?: CallOverrides) => Promise<string[]>;
    getAllMembers: (overrides?: CallOverrides) => Promise<string[]>;
    /**
     * Response type names are:
     *
     * contractType: number
     * daoAddress: string
     * metadata: string
     * commitment: number
     * market: number
     * discordServer: string
     */
    getComData: (overrides?: CallOverrides) => Promise<[number, string, string, number, number, string]>;
    getInteractionsAddr: (overrides?: CallOverrides) => Promise<string>;
    getInteractionsPerUser: (member: string, overrides?: CallOverrides) => Promise<number>;
    getURLs: (overrides?: CallOverrides) => Promise<string[]>;
    hasPassedOnboarding: (member: string, overrides?: CallOverrides) => Promise<boolean>;
    isActivityWhitelisted: (argument_0: string, overrides?: CallOverrides) => Promise<boolean>;
    isCoreTeam: (argument_0: string, overrides?: CallOverrides) => Promise<boolean>;
    isMemberOfExtendedDAO: (member: string, overrides?: CallOverrides) => Promise<boolean>;
    isMemberOfOriginalDAO: (member: string, overrides?: CallOverrides) => Promise<boolean>;
    isMemberOfTheCom: (argument_0: string, overrides?: CallOverrides) => Promise<boolean>;
    isURLListed: (_url: string, overrides?: CallOverrides) => Promise<boolean>;
    join: (newMember: string, overrides?: CallOverrides) => Promise<{
        wait: () => Promise<CommunityExtensionContractEvents>;
    }>;
    passOnboarding: (members: string[], overrides?: CallOverrides) => Promise<{
        wait: () => Promise<CommunityExtensionContractEvents>;
    }>;
    removeURL: (_url: string, overrides?: CallOverrides) => Promise<{
        wait: () => Promise<CommunityExtensionContractEvents>;
    }>;
    setDiscordServer: (discordServer: string, overrides?: CallOverrides) => Promise<{
        wait: () => Promise<CommunityExtensionContractEvents>;
    }>;
}
export interface CommunityExtensionContractEvents {
    events: SWEvent;
}
export declare enum CommunityExtensionContractEventType {
    OnboardingPassed = "OnboardingPassed",
    UrlAdded = "UrlAdded"
}
