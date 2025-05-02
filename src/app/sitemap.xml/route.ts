import { NextRequest } from 'next/server'

export async function GET(req: NextRequest) {
  // Example: Add your dynamic/static routes here
  const pages = [
    '',
    'about',
    'contact',
    'dashboard',
  ]
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com'
  const urls = pages.map(
    (page) =>
      `<url><loc>${baseUrl}/${page}</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`
  )
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`
  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  })
}
