import React, { memo } from 'react';
import { HamburgerMenu } from '../HamburguesaMenu';
import HeaderLogo from './HeaderLogo';

interface HeaderMobileProps {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
  className?: string;
  logoUrl?: string;
  logoAltText?: string;
}

const HeaderMobile: React.FC<HeaderMobileProps> = memo(({
  sidebarOpen,
  onToggleSidebar,
  className = '',
  logoUrl,
  logoAltText
}) => {
  return (
    <div className={`flex items-center gap-2 sm:gap-4 lg:hidden ${className}`}>
      <HamburgerMenu
        isOpen={sidebarOpen}
        onToggle={onToggleSidebar}
        ariaLabel="Abrir menú lateral"
      />
      
      <HeaderLogo
        logoUrl={logoUrl}
        altText={logoAltText}
        className="block flex-shrink-0"
      />
    </div>
  );
});

HeaderMobile.displayName = 'HeaderMobile';

export default HeaderMobile; 