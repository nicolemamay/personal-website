import React from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';

import useContactQuery from '../hooks/useContactQuery';
import ContentWrapper from '../styles/ContentWrapper';
import ButtonLink from './buttonLink';
import Divider from './divider';

import config from '../../config';

const { socialMedia } = config;

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    display: flex;
    flex-direction: column;
    justify-content: start;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      align-items: center;
      flex-direction: row;
    }
  }
`;

const StyledAvatar = styled(Img)`
  && {
    border-radius: 50%;
    filter: grayscale(70%) contrast(1) brightness(100%);
    max-height: 200px;
    max-width: 100%;
    width: 200px;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      margin-bottom: 0;
      max-height: 325px;
      width: 325px;
    }
  }
`;

const StyledBody = styled.div`
  && {
    display: flex;
    flex-direction: column;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      margin: 0 64px;
    }
  }
`;

const StyledSocial = styled.div`
  $$ {
    display: flex;
    flex-direction: row;
  }
`;

const Contact = () => {
  const { image, subtitle, title } = useContactQuery();

  return (
    <section id="contact">
      <StyledContentWrapper>
        <StyledAvatar className="avatar" fluid={image.childImageSharp.fluid} />
        <StyledBody>
          <Divider />
          <h2>{title}</h2>
          <p className="text-secondary">{subtitle}</p>
          <StyledSocial>
            {socialMedia.map(({ id, name, url }) => {
              return (
                <ButtonLink key={id} url={url}>
                  {name}
                </ButtonLink>
              );
            })}
          </StyledSocial>
        </StyledBody>
      </StyledContentWrapper>
    </section>
  );
};

export default Contact;
