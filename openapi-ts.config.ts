import { defineConfig } from "@hey-api/openapi-ts";

export default defineConfig({
	client: { bundle: true, name: "@hey-api/client-fetch" },
	input: "https://api.tembo.io/api-docs/openapi.json",
	output: "src/",
});
