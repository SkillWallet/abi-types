/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type SkillWalletContractFunctions1 =
  | []
  | [SkillWalletContractFunctions]
  | [SkillWalletContractFunctions, SkillWalletContractEvents];
export type SWEvent = {
  event: SkillWalletContractEventType;
  args: any;
}[];

export interface SkillWalletContractFunctions {
  activeMembersCount: () => Promise<number>;
  addNewCoreTeamMembers: (member: string) => Promise<{wait: () => Promise<SkillWalletContractEvents>}>;
  coreTeamMembersCount: () => Promise<number>;
  getCoreTeamMembers: () => Promise<string[]>;
  getMemberAddresses: () => Promise<string[]>;
  getMembers: () => Promise<number[]>;
  getSkillWalletAddress: () => Promise<string>;
  isCoreTeamMember: () => Promise<boolean>;
  isMember: () => Promise<boolean>;
  isPermissioned: () => Promise<boolean>;
  joinNewMember: (uri: string, role: number) => Promise<{wait: () => Promise<SkillWalletContractEvents>}>;
  memberAddresses: () => Promise<string>;
  metadataUri: () => Promise<string>;
  migratedFrom: () => Promise<string>;
  migratedTo: () => Promise<string>;
  owner: () => Promise<string>;
  setMetadataUri: (uri: string) => Promise<{wait: () => Promise<SkillWalletContractEvents>}>;
  setPermissionBadgeAddress: (
    _permissionBadgeAddr: string
  ) => Promise<{wait: () => Promise<SkillWalletContractEvents>}>;
  skillWallet: () => Promise<string>;
  skillWalletIds: () => Promise<number>;
  template: () => Promise<number>;
  testMapping: () => Promise<number>;
  totalMembersAllowed: () => Promise<number>;
  version: () => Promise<number>;
}
export interface SkillWalletContractEvents {
  events: SWEvent;
}

export enum SkillWalletContractEventType {
  CoreTeamMemberAdded = "CoreTeamMemberAdded",
  MemberAdded = "MemberAdded"
}
