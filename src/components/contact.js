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
    flex-direction: row;
    align-items: center;
  }
`;

const StyledAvatar = styled(Img)`
  && {
    max-height: 20rem;
    max-width: 100%;
    width: 20rem;
    border-radius: 50%;
    filter: grayscale(70%) contrast(1) brightness(100%);
  }
`;

const StyledBody = styled(ContentWrapper)`
  && {
    display: flex;
    flex-direction: column;
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
