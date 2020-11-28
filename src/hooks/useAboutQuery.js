import { graphql, useStaticQuery } from 'gatsby';

const useAboutQuery = () => {
  const { allMdx } = useStaticQuery(graphql`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "/about/" } }) {
        edges {
          node {
            body
            frontmatter {
              title
              subheading
              subheadingSecondary
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

export default useAboutQuery;
