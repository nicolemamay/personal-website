import React from 'react';

import useHeroQuery from '../hooks/useHeroQuery';
import ContentWrapper from '../styles/ContentWrapper';

const Hero = () => {
  const { emoji, greetings, subtitle, title } = useHeroQuery();

  return (
    <ContentWrapper>
      <section>
        <h1>
          {greetings}
          <span role="img" aria-label="emoji">
            {emoji}
          </span>
          <br />
          {title}
        </h1>
        <h2>{subtitle}</h2>
      </section>
    </ContentWrapper>
  );
};

export default Hero;
