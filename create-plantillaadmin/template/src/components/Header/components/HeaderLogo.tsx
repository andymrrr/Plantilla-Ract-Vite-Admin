import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderLogoProps } from '../types';

const HeaderLogo: React.FC<HeaderLogoProps> = ({
  className = '',
  logoUrl,
  altText = 'Logo',
  onClick
}) => {
  const defaultLogoUrl = '/src/images/logo/logo-icon.svg';
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link 
      className={`block flex-shrink-0 lg:hidden ${className}`}
      to="/"
      onClick={handleClick}
      aria-label={altText}
    >
      <img 
        src={logoUrl || defaultLogoUrl} 
        alt={altText}
        className="h-8 w-auto"
        loading="lazy"
      />
    </Link>
  );
};

export default HeaderLogo; 