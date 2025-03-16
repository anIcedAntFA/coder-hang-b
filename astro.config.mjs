// @ts-check
import { defineConfig, passthroughImageService } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
		imageService: "cloudflare",
	}),
	output: "static",
	devToolbar: {
		enabled: true,
	},
	site: "https://astro-learner.pages.dev",
	srcDir: "src",
	prefetch: {
		defaultStrategy: "hover",
	},
	i18n: {
		locales: ["vi", "en"],
		defaultLocale: "vi",
	},
	image: {
		service: passthroughImageService(),
	},
	vite: {
		css: {
			transformer: "lightningcss",
			modules: {
				localsConvention: "dashesOnly",
			},
			lightningcss: {
				cssModules: {
					pattern: "nk-[local]-[hash]",
				},
			},
		},
		resolve: {
			// Use react-dom/server.edge instead of react-dom/server.browser for React 19.
			// Without this, MessageChannel from node:worker_threads needs to be polyfilled.
			alias: import.meta.env.PROD
				? {
						"react-dom/server": "react-dom/server.edge",
					}
				: undefined,
		},
	},
});
