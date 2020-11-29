import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { StyledIcon } from './Icon.styled';

// https://medium.com/@erickhoury/react-dynamically-importing-svgs-and-render-as-react-component-b764b6475896
const Icon = ({ name, size, subtitle }) => {
  const ImportedIconRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const importIcon = async () => {
      try {
        const { default: namedImport } = await import(
          `src/images/icons/${name}.inline.svg`
        );
        ImportedIconRef.current = namedImport;
      } catch {
        return null;
      } finally {
        setIsLoading(false);
      }
    };
    importIcon();
  }, [name]);

  const renderIcon = () => {
    if (!isLoading && !!ImportedIconRef.current) {
      const { current: ImportedIcon } = ImportedIconRef;
      return <ImportedIcon height={size} width={size} />;
    }
    return null;
  };

  return (
    <StyledIcon>
      {renderIcon()}
      {subtitle && <p className="text-secondary">{subtitle}</p>}
    </StyledIcon>
  );
};

Icon.defaultProps = {
  name: '',
  size: 50,
  subtitle: '',
};

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  subtitle: PropTypes.string,
};

export default Icon;
