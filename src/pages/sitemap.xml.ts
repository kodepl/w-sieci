import { getCollection } from "astro:content";

export async function GET() {
  const posts = await getCollection("pasmo");
  const origin = "https://www.w-sieci.info.pl";
  const urls = [
    "/",
    "/pasmo/",
    "/o-pasmie/",
    "/list/",
    "/prywatnosc/",
    ...posts.map((post) => `/pasmo/${post.slug}/`),
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url><loc>${origin}${url}</loc></url>`).join("\n")}
</urlset>`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
