import type { CollectionEntry } from "astro:content";

const longDate = new Intl.DateTimeFormat("pl-PL", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function formatWhen(date: Date): string {
  return longDate.format(date);
}

export function isoDay(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function byNewest(posts: CollectionEntry<"pasmo">[]): CollectionEntry<"pasmo">[] {
  return [...posts].sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export function canonicalHref(pathname: string, site: URL | string | undefined): string {
  const path = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return new URL(path, site ?? "https://www.w-sieci.info.pl").href;
}
