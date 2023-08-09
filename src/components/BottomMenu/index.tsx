import { useState } from 'react';

import { ReactComponent as BurgerMenu } from '../../assets/burger-menu-icon.svg';
import { ReactComponent as CloseIcon } from './../../assets/close.svg';

import styles from '../../scss/BottomMenu/BottomMenu.module.scss';
import { Link as ScrollLink } from 'react-scroll';

export const BottomMenu = () => {
  const [isMenuOpened, setMenuOpened] = useState(false);

  return (
      <div className={styles.bottomMenuButtons}>
        <button><h2>Get in touch</h2></button>
        <div className={styles.menuButtonArea}>
          {
              isMenuOpened &&
              <ul className={styles.menuOptions}>
                <ScrollLink to='about' duration={1500} smooth={true} hashSpy={true}>
                  <li>About me</li>
                </ScrollLink>
                <ScrollLink to='work' duration={1500} smooth={true} hashSpy={true}>
                  <li>Work</li>
                </ScrollLink>
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
