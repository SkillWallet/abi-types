/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type CheckpointsContractFunctions1 =
  | []
  | [CheckpointsContractFunctions]
  | [CheckpointsContractFunctions, CheckpointsContractEvents];
export type SWEvent = {
  event: CheckpointsContractEventType;
  args: any;
}[];

export interface CheckpointsContractFunctions {
  checkpoints: () => Promise<{
    competition: string;
    metadataUri: string;
    startDate: number;
    endDate: number;
    skill1: number;
    skill2: number;
    skill3: number;
    role: number;
  }>;
  create: (
    metadata: string,
    startDate: number,
    endDate: number,
    skills: string,
    role: number
  ) => Promise<{wait: () => Promise<CheckpointsContractEvents>}>;
  getCheckpointsPerCompetition: (competition: string) => Promise<number[]>;
  hasAParticipantPassedTheCheckpoint: (checkpointID: number, member: string) => Promise<boolean>;
  hasSkill: (checkpointID: number, role: number, skill: number) => Promise<boolean>;
  pass: (checkpointID: number, participant: string) => Promise<{wait: () => Promise<CheckpointsContractEvents>}>;
}
export interface CheckpointsContractEvents {
  events: SWEvent;
}

export enum CheckpointsContractEventType {
  CheckpointCreated = "CheckpointCreated",
  CheckpointPassed = "CheckpointPassed"
}
