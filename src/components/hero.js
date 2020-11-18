import React from 'react';
import styled from 'styled-components';
import useHeroQuery from '../hooks/useHeroQuery';

const StyledSection = styled.section`
  .title {
    margin-bottom: 0;
  }
  .subtitle {
    margin-top: 0;
  }
  .highlighted {
    box-shadow: inset 0 -2.5rem 0 #cdf3e1;
  }
`;

const Hero = () => {
  const {
    emoji,
    greetings,
    title,
    subtitlePrefix,
    subtitleHighlight,
  } = useHeroQuery();

  return (
    <StyledSection id="hero">
      <h1 className="title">
        {greetings}
        <span role="img" aria-label="emoji">
          {emoji}
        </span>
        <br />
        {title}
      </h1>
      <h2 className="subtitle">
        {subtitlePrefix}{' '}
        <span className="highlighted">{subtitleHighlight}</span>.
      </h2>
    </StyledSection>
  );
};

export default Hero;
