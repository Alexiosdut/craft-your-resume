import { useStaticQuery, graphql } from 'gatsby'

type Site = {
  site: SiteMetadata
}

type SiteMetadata = {
  siteMetadata: {
    title: string
    description: string
    author: string
    keywords: string
    siteUrl: string
  }
}

function useMetaData(): SiteMetadata {
  const { site }: Site = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
          }
        }
      }
    `,
  )

  return { siteMetadata: site.siteMetadata }
}

export default useMetaData
