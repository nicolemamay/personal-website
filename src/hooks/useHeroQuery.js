import { graphql, useStaticQuery } from 'gatsby';

const useHeroQuery = () => {
  const { allMdx } = useStaticQuery(graphql`
    {
      allMdx(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
        edges {
          node {
            frontmatter {
              greetings
              subtitle
              title
            }
          }
        }
      }
    }
  `);

  return allMdx.edges[0].node.frontmatter;
};

export default useHeroQuery;
