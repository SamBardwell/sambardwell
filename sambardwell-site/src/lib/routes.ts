export function blogPostHref(slug: string) {
  if (!/^[a-z0-9-]+$/i.test(slug)) {
    throw new Error("Invalid slug: " + slug);
  }
  return (`/blog/${slug}`) as `/blog/${string}`;
}