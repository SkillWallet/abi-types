/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type CommunityRegistryContractFunctions1 =
  | []
  | [CommunityRegistryContractFunctions]
  | [CommunityRegistryContractFunctions, CommunityRegistryContractEvents];
export type SWEvent = {
  event: CommunityRegistryContractEventType;
  args: any;
}[];

export interface CommunityRegistryContractFunctions {
  createCommunity: (
    url: string,
    template: number,
    totalMembersAllowed: number,
    coreTeamMembersCount: number,
    isPermissioned: boolean,
    migrateFrom: string
  ) => Promise<{wait: () => Promise<CommunityRegistryContractEvents>}>;
  initialize: (_skillWalletAddress: string) => Promise<{wait: () => Promise<CommunityRegistryContractEvents>}>;
  setVersion: (_version: number) => Promise<{wait: () => Promise<CommunityRegistryContractEvents>}>;
  version: () => Promise<number>;
}
export interface CommunityRegistryContractEvents {
  events: SWEvent;
}

export enum CommunityRegistryContractEventType {
  CommunityCreated = "CommunityCreated"
}
