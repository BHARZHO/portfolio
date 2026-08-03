import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION_LINKS } from '@/constants';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { MobileMenu } from './MobileMenu';
import { useScroll } from '@/hooks/useScroll';
import { useActiveSection } from '@/hooks/useActiveSection';
import { cn } from '@/utils/helpers';
import logoImg from '@/assets/logos/logo.jpg';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { scrollProgress, isScrolled } = useScroll();

  const sectionIds = ['hero', 'about', 'skills', 'experience', 'projects', 'certifications', 'contact'];
  const activeSection = useActiveSection(sectionIds);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (location.pathname === '/' && path.startsWith('/')) {
      const sectionId = path === '/' ? 'hero' : path.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
      }
    }
  };

  const checkIsActive = (path: string) => {
    if (location.pathname === '/') {
      const sectionId = path === '/' ? 'hero' : path.substring(1);
      return activeSection === sectionId;
    }
    return location.pathname === path;
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full border-b transition-all duration-350',
        isScrolled
          ? 'h-14 border-border-custom bg-bg-secondary/90 shadow-md backdrop-blur-md'
          : 'h-16 border-border-custom/30 bg-bg-secondary/70 backdrop-blur-sm shadow-sm'
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link
            to="/"
            onClick={(e) => handleNavLinkClick(e, '/')}
            className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
          >
            <img
              src={logoImg}
              alt="Bharzho Logo"
              className="h-8 w-8 object-contain rounded-md border border-border-custom dark:border-white/10"
            />
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
              Bharzho
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          {NAVIGATION_LINKS.map((link) => {
            const isActive = checkIsActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={(e) => handleNavLinkClick(e, link.path)}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-brand-primary',
                  isActive ? 'text-brand-primary font-semibold' : 'text-text-secondary'
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>
        <div className="flex items-center space-x-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-text-secondary hover:bg-bg-secondary hover:text-text-primary focus:outline-none"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={
                  isMobileMenuOpen
                    ? 'M6 18L18 6M6 6l12 12'
                    : 'M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Dynamic Scroll Progress Bar */}
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-brand-primary to-brand-secondary transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeSection={activeSection}
        onNavLinkClick={handleNavLinkClick}
      />
    </header>
  );
};
export default Navbar;
