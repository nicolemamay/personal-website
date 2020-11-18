import { graphql, useStaticQuery } from 'gatsby';

const useHeroQuery = () => {
  const { hero } = useStaticQuery(graphql`
    {
      hero: allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              greetings
              emoji
              subtitlePrefix
              subtitleHighlight
            }
          }
        }
      }
    }
  `);

  return hero.edges[0].node.frontmatter;
};

export default useHeroQuery;
