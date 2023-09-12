import { useEffect, useRef, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

import { ReactComponent as BurgerMenu } from '../../assets/img/burger-menu-icon.svg';
import { ReactComponent as CloseIcon } from '../../assets/img/close-icon.svg';

import styles from '../../scss/BottomMenu/BottomMenu.module.scss';

type PopupClick = MouseEvent;

export const BottomMenu = () => {
  const menuRef = useRef<HTMLButtonElement | null>(null);
  const [isMenuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    const clickOutsideHandler = (event: PopupClick) => {
      if (menuRef.current && !event.composedPath().includes(menuRef.current as EventTarget)) {
        setMenuOpened(false);
      }
    };

    const escClickHandler = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        setMenuOpened(false);
      }
    };

    document.body.addEventListener('click', clickOutsideHandler);
    document.body.addEventListener('keydown', escClickHandler);
    return () => {
      document.body.removeEventListener('click', clickOutsideHandler);
      document.body.removeEventListener('keydown', escClickHandler);
    }
  }, []);

  return (
      <div className={styles.bottomMenuButtons}>
        <ScrollLink to='contact' duration={1500} smooth={true} hashSpy={true}>
          <motion.button whileTap={{ scale: 0.97 }}><h2>Get in touch</h2></motion.button>
        </ScrollLink>
        <div className={styles.menuButtonArea}>
          {
              isMenuOpened &&
              <ul className={styles.menuOptions}>
                <ScrollLink to='about' duration={1500} smooth={true} hashSpy={true} spyThrottle={500}>
                  <li>About me</li>
                </ScrollLink>
                <ScrollLink to='work' duration={1500} smooth={true} hashSpy={true} spyThrottle={500} isDynamic={true}>
                  <li>Work</li>
                </ScrollLink>
                <li className={styles.disabledOption}>Blog</li>
                <ScrollLink to='contact' duration={1500} smooth={true} hashSpy={true} spyThrottle={500}>
                  <li>Contact</li>
                </ScrollLink>
              </ul>
          }
          <motion.button ref={menuRef} className={styles.menuButton} whileTap={{ scale: 0.97 }}
                         onClick={() => setMenuOpened((prevState) => !prevState)}>
            <h2>Menu</h2>
            {
              !isMenuOpened
                  ? <BurgerMenu className={styles.burgerMenu} />
                  : <CloseIcon className={styles.burgerMenu} />
            }
          </motion.button>
        </div>
      </div>
  )
};
