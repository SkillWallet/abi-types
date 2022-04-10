# Getting Started with Skillwallet Abi types

### Generate types

```cmd
npm run build
```

### Install dependency on your project

```cmd
npm install sw-abi-types
```

### Provider Config Parameters

```ts
export interface Web3ProviderExtras {
  event: string; // event emitted from smart contract
  beforeRequest: Function // useful for cases like change network
  afterRequest: Function // for cases 
  transactionState: (
    state: "started" | "rejected" | "waiting" | "done",
    ...args: any
  ) => void; // state of smart contract call, before user accepts and is complete
}

```

### Usage

#### SkillWalletABI & Provider

```ts
import { SkillWalletContractEventType, Web3SkillWalletProvider } from "@skill-wallet/sw-abi-types";

const address = 0x00000...;
const contract = await Web3SkillWalletProvider(address, {
  event: SkillWalletContractEventType.CoreTeamMemberAdded,
  transactionState: (state: string) => {
    console.log(state); // or use redux to dispatch action;
  }
});
try {
  const response = await contract.addNewCoreTeamMembers(0x00000);
  return response;
} catch (error) {
  console.log(error);
}
```

## Available Web3 Providers

- Web3CheckpointsProvider
- Web3CommunityRegistryProvider
- Web3CompetitionsProvider
- Web3DITOCommunityProvider
- Web3GigsProvider
- Web3OlympicsProvider
- Web3PartnersAgreementProvider
- Web3PartnersRegistryProvider
- Web3SkillWalletProvider
- Web3ActivitiesProvider
