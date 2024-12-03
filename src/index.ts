import { type OptionsLegacyParser } from "@hey-api/client-fetch";
import * as sdk from "./sdk.gen.js";
export default sdk;

/**
 * Initializes a default client using the proper authorization headers
 *
 * Defaults to https://api.tembo.io as the `baseUrl`
 *
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
