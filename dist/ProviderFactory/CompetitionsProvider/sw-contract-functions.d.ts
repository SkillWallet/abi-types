/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */
export declare type CompetitionsContractFunctions1 = [] | [CompetitionsContractFunctions] | [CompetitionsContractFunctions, CompetitionsContractEvents];
export declare type SWEvent = {
    event: CompetitionsContractEventType;
    args: any;
}[];
export interface CompetitionsContractFunctions {
    addPartnerMemberToCompetition: (member: string) => Promise<{
        wait: () => Promise<CompetitionsContractEvents>;
    }>;
    createCheckpoint: (metadata: string, startCheckpointDate: number, endCheckpointDate: number, checkpointSkills: string) => Promise<{
        wait: () => Promise<CompetitionsContractEvents>;
    }>;
    endDate: () => Promise<number>;
    getParticipants: () => Promise<string[]>;
    getPartnerMembers: () => Promise<string[]>;
    isCompetitionSkill: () => Promise<boolean>;
    isOngoing: () => Promise<boolean>;
    isParticipant: () => Promise<boolean>;
    isPartner: () => Promise<boolean>;
    join: () => Promise<{
        wait: () => Promise<CompetitionsContractEvents>;
    }>;
    metadataUri: () => Promise<string>;
    passCheckpoint: (participant: string, checkpointID: number) => Promise<{
        wait: () => Promise<CompetitionsContractEvents>;
    }>;
    role: () => Promise<number>;
    setWinners: (winners: string[]) => Promise<{
        wait: () => Promise<CompetitionsContractEvents>;
    }>;
    skills: () => Promise<number>;
    startDate: () => Promise<number>;
    winnersAddress: () => Promise<string>;
}
export interface CompetitionsContractEvents {
    events: SWEvent;
}
export declare enum CompetitionsContractEventType {
    CheckpointCreated = "CheckpointCreated",
    CheckpointPassed = "CheckpointPassed",
    ParticipantAdded = "ParticipantAdded",
    PartnerMemberAdded = "PartnerMemberAdded",
    WinnersSet = "WinnersSet"
}
