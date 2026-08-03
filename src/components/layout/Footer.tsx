import { Link } from 'react-router-dom';
import { NAVIGATION_LINKS } from '@/constants';
import { SocialLinks } from '@/components/ui/SocialLinks';
import logoImg from '@/assets/logos/logo.jpg';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border-custom bg-bg-secondary transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 flex flex-col items-center justify-between gap-6 md:flex-row">
        {/* Navigation links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {NAVIGATION_LINKS.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-xs font-medium text-text-secondary hover:text-brand-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        
        {/* Social Link icons */}
        <SocialLinks />
        
        {/* Copyright and Brand Info */}
        <div className="flex items-center space-x-2 text-text-muted">
          <img
            src={logoImg}
            alt="Bharzho Brand Logo"
            className="h-5 w-5 object-contain rounded border border-border-custom dark:border-white/10"
          />
          <p className="text-xs">
            &copy; {currentYear} Bharzho. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
