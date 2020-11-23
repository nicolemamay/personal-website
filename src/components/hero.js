import React from 'react';

import useHeroQuery from '../hooks/useHeroQuery';
import ContentWrapper from '../styles/ContentWrapper';

const Hero = () => {
  const { greetings, subtitle, title } = useHeroQuery();

  return (
    <section>
      <ContentWrapper>
        <h1>
          {greetings}
          <br />
          {title}
        </h1>
        <p className="text-secondary">{subtitle}</p>
      </ContentWrapper>
    </section>
  );
};

export default Hero;
