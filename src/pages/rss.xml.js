import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('noticias');

  return rss({
    title: 'Notícias',
    description: 'Atualizações e novidades',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/noticias/${post.slug}/`,
    })),
  });
}