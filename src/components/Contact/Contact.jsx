import React, { useContext, useEffect, useRef } from 'react';
import Img from 'gatsby-image';
import { useAnimation } from 'framer-motion';

import config from '../../../config';
import Context from 'src/context';
import useContactQuery from 'src/hooks/useContactQuery';
import useIsOnScreen from 'src/hooks/useIsOnScreen';

import ButtonLink from 'src/components/ButtonLink/ButtonLink';
import Divider from 'src/components/Divider/Divider';

import {
  StyledAvatar,
  StyledBody,
  StyledContentWrapper,
  StyledSocial,
} from './Contact.styled';

const { socialMedia } = config;

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
        avatarControls.start({ opacity: 1, x: 0, transition: { delay: 0.5 } });
      }

      if (isBodyOnScreen) {
        bodyControls.start({ opacity: 1, y: 0, transition: { delay: 0.5 } });
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
