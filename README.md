# Getting Started with Skillwallet Abi types

### Generate types

```cmd
npm run build
```

### Install dependency on your project


Add dependency to you package.json

```json
{
  "dependencies": {
    ...
    "sw-types": "git+https://github.com/SkillWallet/abi-types.git#main"
  }
}

```

```cmd
npm install sw-types
```



### Usage

#### Normal usage

```ts
import { SWContractFunctions, SWContractEvents } from 'sw-types';
```

If you are using ethers then you will want to extends Contracts class 

```ts
import { SWContractFunctions, SWContractEvents } from 'sw-types';
declare module 'ethers' {
  export class Contract extends BaseContract implements SWContractFunctions {
    readonly [key: string]: ContractFunction | any;
  }
}
```

NOTE: It will ask you to **Implement interface SWContractFunctions**


### All available types

#### Abi types
```ts
- SWEvent -> {event, args}
- SWContractFunctions -> main methods
- SWContractEvents -> events > SWEvent[]
- SWContractEventType -> event types
```

#### Abi lists
```ts
SkillWalletAbi: JsonFragment[]
DitoCommunityAbi: JsonFragment[]
```

#### Other

```ts
JsonFragment
JsonFragmentType
```