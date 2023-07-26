import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as ArrowDown } from './assets/arrow-down.svg';
import { ReactComponent as BurgerMenu } from './assets/burger_menu_icon.svg';
import { ReactComponent as CloseIcon } from './assets/close.svg';

import styles from './scss/App.module.scss';
import { useState } from 'react';

// TODO - favicon
//      - division into components
//      - bottom buttons in mobile version
//      - menu onClick

export const App = () => {
  const [isMenuOpened, setMenuOpened] = useState(false);

  return (
      <div className={styles.root}>
        <div className={styles.container}>
          <Logo className={styles.logo} />

          <h1 className={styles.hiText}>
            Hi there! I’m Dmitriy.<br />
            An enthusiastic <span className={styles.contrastText}>developer</span>.
          </h1>

          <div className={styles.bottomMenuEmptyContainer}>
            <div className={styles.bottomMenuBlock}>
              <ArrowDown className={styles.arrowDown} />
              <div className={styles.bottomMenuButtons}>
                <button><h2>Get in touch</h2></button>
                <div className={styles.menuButtonArea}>
                  {
                    isMenuOpened &&
                      <div>
                        <ul>
                          <li>About me</li>
                          <li>Work</li>
                          <li>Blog</li>
                          <li>Contact</li>
                        </ul>
                      </div>
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
          </div>

        </div>
      </div>
  );
};
