import { useState } from 'react';

import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as ArrowDown } from './assets/arrow-down.svg';
import { ReactComponent as BurgerMenu } from './assets/burger_menu_icon.svg';
import { ReactComponent as CloseIcon } from './assets/close.svg';

import { AboutMe } from './components/AboutMe';

import styles from './scss/App.module.scss';

// TODO - favicon
//      - division into components
//      - burgerMenu icon animation
//      - gradient, while moving to another section

export const App = () => {
  const [isMenuOpened, setMenuOpened] = useState(false);

  return (
      <div className={styles.root}>
        {/*<Parallax pages={2} className={styles.parallax}>*/}
          <div className={styles.container}>

            {/*<ParallaxLayer speed={1} offset={0}>*/}
              <Logo className={styles.logo} />

              <h1 className={styles.hiText}>
                Hi there! I’m Dmitriy.<br />
                An enthusiastic <span className={styles.contrastText}>developer</span>.
              </h1>

              <ArrowDown className={styles.arrowDown} />
            {/*</ParallaxLayer>*/}

            {/*<ParallaxLayer speed={0.5}>*/}
              {/*<h2>Web-development is fun!</h2>*/}
              <AboutMe />
            {/*</ParallaxLayer>*/}

          </div>
         {/*</Parallax>*/}
        {/*TODO - parallax from Framer*/}

        <div className={styles.bottomMenuButtons}>
          <button><h2>Get in touch</h2></button>
          <div className={styles.menuButtonArea}>
            {
                isMenuOpened &&
                <ul className={styles.menuOptions}>
                  <li>About me</li>
                  <li>Work</li>
                  <li>Blog</li>
                  <li>Contact</li>
                </ul>
            }
            <button className={styles.menuButton} onClick={() => setMenuOpened((prevState) => !prevState)}>
              <h2>Menu</h2>
              {
                !isMenuOpened
                    ? <BurgerMenu className={styles.burgerMenu} />
                    : <CloseIcon className={styles.burgerMenu} />
              }
            </button>
          </div>
        </div>
      </div>
  );
};
