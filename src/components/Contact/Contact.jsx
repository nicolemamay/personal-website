import React, { useContext, useEffect, useRef } from 'react';
import Img from 'gatsby-image';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';

import Context from 'src/context';
import useContactQuery from 'src/hooks/useContactQuery';
import useIsOnScreen from 'src/hooks/useIsOnScreen';
import ContentWrapper from 'src/styles/ContentWrapper';

import ButtonLink from 'src/components/ButtonLink/ButtonLink';
import Divider from 'src/components/Divider/Divider';

import config from '../../../config';

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

const StyledAvatar = motion.custom(styled.div`
  && .avatar {
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
`);

const StyledBody = motion.custom(styled.div`
  && {
    display: flex;
    flex-direction: column;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      margin: 0 64px;
    }
  }
`);

const StyledSocial = styled.div`
  $$ {
    display: flex;
    flex-direction: row;
  }
`;

const Contact = () => {
  const hasSocialMediaLinks = !!socialMedia && socialMedia.length > 0;
  const { image, subtitle, title } = useContactQuery();
  const { isIntroDone } = useContext(Context).state;

  // Required for animation - start after the splashScreen sequence is done
  const avatarControls = useAnimation();
  const bodyControls = useAnimation();

  const avatarRef = useRef();
  const bodyRef = useRef();

  const isAvatarOnScreen = useIsOnScreen(avatarRef);
  const isBodyOnScreen = useIsOnScreen(bodyRef);

  useEffect(() => {
    if (isIntroDone) {
      if (isAvatarOnScreen) {
        avatarControls.start({ opacity: 1, x: 0 });
      }

      if (isBodyOnScreen) {
        bodyControls.start({ opacity: 1, y: 0 });
      }
    }
  }, [
    avatarControls,
    bodyControls,
    isAvatarOnScreen,
    isBodyOnScreen,
    isIntroDone,
  ]);

  if (!hasSocialMediaLinks) {
    return null;
  }

  return (
    <section id="contact">
      <StyledContentWrapper>
        <StyledAvatar
          animate={avatarControls}
          initial={{ opacity: 0, x: -20 }}
          ref={avatarRef}
        >
          <Img className="avatar" fluid={image.childImageSharp.fluid} />
        </StyledAvatar>
        <StyledBody
          animate={bodyControls}
          initial={{ opacity: 0, y: 20 }}
          ref={bodyRef}
        >
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
