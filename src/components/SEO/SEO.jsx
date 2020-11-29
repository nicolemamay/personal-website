import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import useSiteMetadataQuery from 'src/hooks/useSiteMetadataQuery';

import Theme from 'src/styles/Theme';

const { colors } = Theme;

const SEO = ({ description, lang, meta, title }) => {
  const { siteMetadata } = useSiteMetadataQuery();
  const metaTitle = title || siteMetadata.title;
  const metaDescription = description || siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:site_name`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `msapplication-TileColor`,
          content: colors.primary,
        },
        {
          name: `theme-color`,
          content: colors.primary,
        },
      ].concat(meta)}
    />
  );
};

SEO.defaultProps = {
  description: '',
  lang: 'en',
  meta: [],
  title: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string,
};

export default SEO;
