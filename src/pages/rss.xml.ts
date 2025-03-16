import rss, { pagesGlobToRssItems, type RSSOptions } from "@astrojs/rss";

export async function GET(context: RSSOptions) {
	return rss({
		title: "Astro Learner | Blog",
		description: "My journey learning Astro",
		site: context.site,
		items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
		customData: `<language>en-us</language>`,
	});
}
