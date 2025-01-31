import adapter from "sveltekit-adapter-chrome-extension";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
		  // default options are shown
		  pages: "build",
		  assets: "build",
		  fallback: null,
		  precompress: false,
		  manifest: "manifest.json",
		}),
		appDir: "app",
	  },
};

export default config;
