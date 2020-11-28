import React from 'react';
import styled from 'styled-components';

import useHeroQuery from '../hooks/useHeroQuery';
import ContentWrapper from '../styles/ContentWrapper';

const StyledSubtitle = styled.p`
  max-width: 300px;
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: none;
  }
`;

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
        <StyledSubtitle className="text-secondary">{subtitle}</StyledSubtitle>
      </ContentWrapper>
    </section>
  );
};

export default Hero;
