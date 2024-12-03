<h1 align="center">Tembo Client Typescript</h1>

<p align="center">The typescript client for connecting to Tembo Cloud's platform API</p>

<p align="center">
	<a href="https://github.com/tembo/tembo-client-typescript/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank"><img alt="🤝 Code of Conduct: Kept" src="https://img.shields.io/badge/%F0%9F%A4%9D_code_of_conduct-kept-21bb42" /></a>
	<a href="https://github.com/tembo/tembo-client-typescript/blob/main/LICENSE.md" target="_blank"><img alt="📝 License: MIT" src="https://img.shields.io/badge/%F0%9F%93%9D_license-MIT-21bb42.svg"></a>
	<a href="http://npmjs.com/package/tembo-client-typescript"><img alt="📦 npm version" src="https://img.shields.io/npm/v/tembo-client-typescript?color=21bb42&label=%F0%9F%93%A6%20npm" /></a>
	<img alt="💪 TypeScript: Strict" src="https://img.shields.io/badge/%F0%9F%92%AA_typescript-strict-21bb42.svg" />
</p>

## Usage

```shell
npm i @tembo-io/api-client
```

```ts
import client from "@tembo-io/api-client";

const client = createDefaultApiClient({
	apiKey: process.env.TEMPO_API_KEY,
});

const instances = await client.createInstance(...);
```
