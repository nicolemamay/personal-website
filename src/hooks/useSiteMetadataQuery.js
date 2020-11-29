import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadataQuery = () => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  return site;
};

export default useSiteMetadataQuery;
