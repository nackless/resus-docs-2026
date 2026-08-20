import type { CollectionEntry } from 'astro:content';

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

export function getPostSlug(post: CollectionEntry<'posts'>): string {
  if (post.data.slug) {
    return slugify(post.data.slug);
  }
  return post.slug;
}
