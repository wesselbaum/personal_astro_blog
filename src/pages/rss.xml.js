import rss, { pagesGlobToRssItems } from '@astrojs/rss';

export async function get() {
    const items = await pagesGlobToRssItems(import.meta.glob('./**/*.md'));

    const sorted = items.sort((a,b) => {
        return a.pubDate < b.pubDate ? 1 : b.pubDate < a.pubDate ? -1 : 0
    })

    return rss({
        title: 'Persönlicher Blog von Aleksej Wesselbaum',
        description: '',
        site: 'https://wesselbaum.github.io/personal_astro_blog/',
        items: sorted,
        customData: `<language>en-us</language>`,
    });
}