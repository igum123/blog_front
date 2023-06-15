function generateSiteMap(posts, domaine) {
  return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       ${posts.map((post) => {
    return `
         <url>
             <loc>${`${domaine}/blog/${post.url}`}</loc>
         </url>
       `;
  })
      .join('')}
     </urlset>
   `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  let domaine = process.env.NEXT_PUBLIC_API;
  let publicDomaine = process.env.NEXT_PUBLIC_DOMAIN;
  let request = await fetch(`${domaine}/api/v1/blog/articles/sitemap`);
  const posts = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts.data.items, publicDomaine);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;