import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION_LINKS } from '@/constants';
import { cn } from '@/utils/helpers';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onNavLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, path: string) => void;
}

export const MobileMenu = ({ isOpen, onClose, activeSection, onNavLinkClick }: MobileMenuProps) => {
  const location = useLocation();

  if (!isOpen) return null;

  const checkIsActive = (path: string) => {
    if (location.pathname === '/') {
      const sectionId = path === '/' ? 'hero' : path.substring(1);
      return activeSection === sectionId;
    }
    return location.pathname === path;
  };

  return (
    <div className="md:hidden transition-all duration-200">
      <div className="space-y-1 px-2 pb-4 pt-2 sm:px-3 bg-bg-primary border-b border-border-custom shadow-lg">
        {NAVIGATION_LINKS.map((link) => {
          const isActive = checkIsActive(link.path);
          return (
            <Link
              key={link.path}
              to={link.path}
              onClick={(e) => {
                onNavLinkClick(e, link.path);
                onClose();
              }}
              className={cn(
                'block rounded-md px-3 py-2 text-base font-medium transition-colors',
                isActive
                  ? 'bg-brand-primary-light/50 text-brand-primary dark:bg-brand-primary-light/10 font-semibold'
                  : 'text-text-secondary hover:bg-bg-secondary hover:text-text-primary'
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default MobileMenu;
