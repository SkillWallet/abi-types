import { CallOverrides } from "ethers";
      /* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ActivitiesContractFunctions1 =
  | []
  | [ActivitiesContractFunctions]
  | [ActivitiesContractFunctions, ActivitiesContractEvents];
export type SWEvent = {
  event: ActivitiesContractEventType;
  args: any;
}[];

export interface ActivitiesContractFunctions {
  activityToRole: (overrides?: CallOverrides) => Promise<number>;
  activityToTask: (overrides?: CallOverrides) => Promise<number>;
  approve: (
    to: string,
    tokenId: number,
    overrides?: CallOverrides
  ) => Promise<{wait: () => Promise<ActivitiesContractEvents>}>;
  balanceOf: (owner: string, overrides?: CallOverrides) => Promise<number>;
  baseURI: (overrides?: CallOverrides) => Promise<string>;
  community: (overrides?: CallOverrides) => Promise<string>;
  createActivity: (
    _type: number,
    _role: number,
    _uri: string,
    overrides?: CallOverrides
  ) => Promise<{wait: () => Promise<ActivitiesContractEvents>}>;
  createTask: (
    _role: number,
    _uri: string,
    overrides?: CallOverrides
  ) => Promise<{wait: () => Promise<ActivitiesContractEvents>}>;
  discordBotAddress: (overrides?: CallOverrides) => Promise<string>;
  finalizeActivity: (
    _id: number,
    _uri: string,
    members: string[],
    overrides?: CallOverrides
  ) => Promise<{wait: () => Promise<ActivitiesContractEvents>}>;
  finilizeTask: (
    _activityId: number,
    overrides?: CallOverrides
  ) => Promise<{wait: () => Promise<ActivitiesContractEvents>}>;
  getActivitiesByType: (_type: number, overrides?: CallOverrides) => Promise<number[]>;
  getApproved: (tokenId: number, overrides?: CallOverrides) => Promise<string>;
  getInteractionsAddr: (overrides?: CallOverrides) => Promise<string>;
  /**
   * Response type names are:
   *
   * activityId: number
   * createdOn: number
   * status: number
   * creator: string
   * taker: string
   * submitionUrl: string
   * role: number
   */
  getTaskByActivityId: (
    _activityId: number,
    overrides?: CallOverrides
  ) => Promise<[number, number, number, string, string, string, number]>;
  idTypes: (overrides?: CallOverrides) => Promise<number>;
  isApprovedForAll: (owner: string, operator: string, overrides?: CallOverrides) => Promise<boolean>;
  isFinalized: (overrides?: CallOverrides) => Promise<boolean>;
  name: (overrides?: CallOverrides) => Promise<string>;
  onERC721Received: (
    operator: string,
    from: string,
    tokenId: number,
    data: string,
    overrides?: CallOverrides
  ) => Promise<string>;
  ownerOf: (tokenId: number, overrides?: CallOverrides) => Promise<string>;
  safeTransferFrom: (
    from: string,
    to: string,
    tokenId: number,
    _data: string,
    overrides?: CallOverrides
  ) => Promise<{wait: () => Promise<ActivitiesContractEvents>}>;
  setApprovalForAll: (
    operator: string,
    approved: boolean,
    overrides?: CallOverrides
  ) => Promise<{wait: () => Promise<ActivitiesContractEvents>}>;
  setDiscordBotAddress: (
    _discordBotAddress: string,
    overrides?: CallOverrides
  ) => Promise<{wait: () => Promise<ActivitiesContractEvents>}>;
  submitTask: (
    _activityId: number,
    _submitionUrl: string,
    overrides?: CallOverrides
  ) => Promise<{wait: () => Promise<ActivitiesContractEvents>}>;
  supportsInterface: (interfaceId: string, overrides?: CallOverrides) => Promise<boolean>;
  symbol: (overrides?: CallOverrides) => Promise<string>;
  takeTask: (
    _activityId: number,
    overrides?: CallOverrides
  ) => Promise<{wait: () => Promise<ActivitiesContractEvents>}>;
  tasks: (
    overrides?: CallOverrides
  ) => Promise<{
    activityId: number;
    createdOn: number;
    status: number;
    creator: string;
    taker: string;
    submitionUrl: string;
    role: number;
  }>;
  tokenByIndex: (index: number, overrides?: CallOverrides) => Promise<number>;
  tokenOfOwnerByIndex: (owner: string, index: number, overrides?: CallOverrides) => Promise<number>;
  tokenURI: (tokenId: number, overrides?: CallOverrides) => Promise<string>;
  totalSupply: (overrides?: CallOverrides) => Promise<number>;
  transferFrom: (
    from: string,
    to: string,
    tokenId: number,
    overrides?: CallOverrides
  ) => Promise<{wait: () => Promise<ActivitiesContractEvents>}>;
}
export interface ActivitiesContractEvents {
  events: SWEvent;
}

export enum ActivitiesContractEventType {
  ActivityCreated = "ActivityCreated",
  ActivityFinalized = "ActivityFinalized",
  Approval = "Approval",
  ApprovalForAll = "ApprovalForAll",
  TaskFinalized = "TaskFinalized",
  TaskSubmitted = "TaskSubmitted",
  TaskTaken = "TaskTaken",
  Transfer = "Transfer"
}
