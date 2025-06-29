import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

export const SEO = ({ title, description, pathname, children }) => {
  const { title: defaultTitle, description: defaultDescription, image, siteUrl, twitterUsername } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="github:card" content="summary_large_image" />
      <meta name="github:title" content={seo.title} />
      <meta name="github:url" content={seo.url} />
      <meta name="github:description" content={seo.description} />
      <meta name="github:image" content={seo.image} />
      <meta name="github:creator" content={seo.githubUsername} />
    </>
  )
}