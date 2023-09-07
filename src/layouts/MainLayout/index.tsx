import { useEffect, useState } from 'react';

import { AboutMe, Contact, LandingPage, Work } from '../../pages';
import { BottomMenu, ScrollToTop } from '../../components';
import styles from '../../scss/App.module.scss';

export const MainLayout = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const scrollToTopHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleVisibleButton = () => {
    setShowScrollToTop(window.pageYOffset > 300)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleVisibleButton);

    return () => {
      window.removeEventListener('scroll', handleVisibleButton);
    }
  }, []);

  return (
      <main className={styles.container}>
        {showScrollToTop && <ScrollToTop scroll={scrollToTopHandler} />}
        <LandingPage />
        <AboutMe />
        <Work />
        <Contact />
        <BottomMenu />
      </main>
  )
};
