import { type OptionsLegacyParser } from "@hey-api/client-fetch";
import * as sdk from "./sdk.gen.js";
export default sdk;

/**
 * Initializes a default client using the proper authorization headers
 *
 * Defaults to https://api.tembo.io as the `baseUrl`
 *
 * @param options - The options for the client
 *
 * # Example
 * ```ts
 import { createDefaultApiClient } from "@tembo-io/api-client";

const client = createDefaultApiClient({
	apiKey: process.env.TEMPO_API_KEY,
});

const instances = await client.createInstance(...);
 * ```
 */
export function createDefaultApiClient(
	options: OptionsLegacyParser & { apiKey: string },
) {
	sdk.client.setConfig({
		baseUrl: "https://api.tembo.io",
		headers: {
			Authorization: `Bearer ${options.apiKey}`,
		},
		...options,
	});
	return {
		...sdk,
	};
}

export * from "./types.gen.js";
