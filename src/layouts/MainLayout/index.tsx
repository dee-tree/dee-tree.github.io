import { useEffect, useState } from 'react';

import { AboutMe, Contact, LandingPage, Work } from '../../pages';
import { ScrollToTop } from '../../components';

export const MainLayout = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const scrollToTopHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleVisibleButton = () => {
    setShowScrollToTop( window.pageYOffset > 300 )
  }

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton);

    return () => {
      window.removeEventListener('scroll', handleVisibleButton);
    }
  }, []);

  return (
      <>
        {showScrollToTop && <ScrollToTop scroll={scrollToTopHandler} />}
        <LandingPage />
        <AboutMe />
        <Work />
        <Contact />
      </>
  )
};
