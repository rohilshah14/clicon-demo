import Head from "next/head";

export default function SeoHead({ title, description }) {
  const siteName = "Clicon";
  const siteUrl = "http://localhost:3000/"; 

  return (
    <Head>
      <title>{title ? `${siteName} - ${title}` : siteName}</title>
      <meta name="description" content={description} />
      <meta name="author" content={siteName} />

      <meta property="og:title" content={title ? `${siteName} - ${title}` : siteName} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content={siteName} />


      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title ? `${siteName} - ${title}` : siteName} />
      <meta name="twitter:description" content={description} />
    </Head>
  );
}
