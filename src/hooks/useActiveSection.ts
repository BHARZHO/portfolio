import { useState, useEffect } from 'react';

export const useActiveSection = (sectionIds: string[], options?: IntersectionObserverInit) => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    if (sectionIds.length === 0) return;

    const defaultOptions = {
      rootMargin: '-20% 0px -60% 0px', // Highlights sections when they pass near the upper-middle of viewport
      threshold: 0,
      ...options,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, defaultOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [sectionIds, options]);

  return activeSection;
};
export default useActiveSection;
