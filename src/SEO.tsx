import { Helmet } from 'react-helmet'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
}

const SEO = ({
  title = 'Default App Name',
  description = 'This is a default description for the app.',
  keywords = 'React, TypeScript, Webpack, SEO',
  image = '/default-image.png',
  url = 'https://www.example.com',
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Your Name" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* OpenGraph (Facebook) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter Meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}

export default SEO
