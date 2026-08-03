import { SOCIAL_LINKS } from '@/constants';
import githubIcon from '@/assets/icons/github.png';
import linkedinIcon from '@/assets/icons/linkedin.png';
import xIcon from '@/assets/icons/x.jpg';

export const SocialLinks = () => {
  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github':
        return githubIcon;
      case 'linkedin':
        return linkedinIcon;
      case 'twitter':
        return xIcon;
      default:
        return '';
    }
  };

  return (
    <div className="flex items-center space-x-4">
      {SOCIAL_LINKS.map((link) => {
        const iconSrc = getSocialIcon(link.name);

        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all duration-200 hover:scale-110 opacity-70 hover:opacity-100"
            aria-label={link.name}
          >
            {iconSrc ? (
              <img
                src={iconSrc}
                alt={`${link.name} Logo`}
                className="h-5 w-5 object-contain rounded-md dark:brightness-110"
              />
            ) : (
              <span className="text-xs font-semibold text-text-secondary hover:text-brand-primary">
                {link.name}
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
};
export default SocialLinks;
