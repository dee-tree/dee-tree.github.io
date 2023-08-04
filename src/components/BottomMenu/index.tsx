import { useState } from 'react';

import { ReactComponent as BurgerMenu } from './../../assets/burger_menu_icon.svg';
import { ReactComponent as CloseIcon } from './../../assets/close.svg';

import styles from '../../scss/BottomMenu/BottomMenu.module.scss';

export const BottomMenu = () => {
  const [isMenuOpened, setMenuOpened] = useState(false);

  return (
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
  )
};
