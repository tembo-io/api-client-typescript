<h1 align="center">@tembo-io/api-client</h1>

<p align="center">A Typescript client for connecting to Tembo Cloud's platform API</p>

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
