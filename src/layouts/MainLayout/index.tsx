import { AboutMe, LandingPage } from '../../pages';

export const MainLayout = () => {
  // TODO - change url only - Work Case, Blog - navigate. Other cases - just scroll to section from menu.
  //      - home page, when click on logo
  return (
      <div style={{scrollBehavior: 'smooth'}}>
        <LandingPage />
        <AboutMe />
        <LandingPage />
      </div>
  )
};
