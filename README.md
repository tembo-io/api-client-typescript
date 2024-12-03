<h1 align="center">Tembo Client Typescript</h1>

<p align="center">Typescript client for connecting to Tembo Cloud's platform API</p>

<p align="center">
	<a href="https://github.com/tembo/tembo-client-typescript/blob/main/LICENSE.md" target="_blank"><img alt="📝 License: MIT" src="https://img.shields.io/badge/%F0%9F%93%9D_license-MIT-21bb42.svg"></a>
	<a href="http://npmjs.com/package/tembo-client-typescript"><img alt="📦 npm version" src="https://img.shields.io/npm/v/tembo-client-typescript?color=21bb42&label=%F0%9F%93%A6%20npm" /></a>
	<img alt="💪 TypeScript: Strict" src="https://img.shields.io/badge/%F0%9F%92%AA_typescript-strict-21bb42.svg" />
</p>

## Usage

```shell
npm i @tembo-io/api-client
```

```ts
import { createDefaultApiClient } from "@tembo-io/api-client";

const client = createDefaultApiClient({
	apiKey: process.env.TEMPO_API_KEY,
});

const instances = await client.createInstance(...);
```
