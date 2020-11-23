import { graphql, useStaticQuery } from 'gatsby';

const useContactQuery = () => {
  const { allMdx } = useStaticQuery(graphql`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "/contact/" } }) {
        edges {
          node {
            body
            frontmatter {
              subtitle
              title
              image {
                childImageSharp {
                  fluid(maxWidth: 600, quality: 90) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const { body, frontmatter } = allMdx.edges[0].node;

  return {
    body,
    ...frontmatter,
  };
};

export default useContactQuery;
