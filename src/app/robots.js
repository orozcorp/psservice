export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/Dashboard/",
    },
    sitemap: "https://www.psservice.com.mx/sitemap.xml",
  };
}
