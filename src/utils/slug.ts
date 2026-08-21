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

export function getPostDate(post: CollectionEntry<'posts'>): Date {
  if (post.data.date) return new Date(post.data.date);
  if (post.data.pubDate) return new Date(post.data.pubDate);
  return new Date();
}

export function getPostCover(post: CollectionEntry<'posts'>): string | undefined {
  return post.data.coverImage || post.data.image;
}
