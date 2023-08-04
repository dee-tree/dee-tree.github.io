import { ReactComponent as Logo } from './../../assets/logo.svg';
import { ReactComponent as ArrowDown } from './../../assets/arrow-down.svg';

import { Link } from 'react-scroll';

import styles from '../../scss/LandingPage/LandingPage.module.scss';

export const LandingPage = () => {
  return (
      <section className={styles.root}>
        <Logo className={styles.logo} />

        <h1 className={styles.hiText}>
          Hi there! I’m Dmitriy.<br />
          An enthusiastic <span className={styles.contrastText}>developer</span>.
        </h1>

        <Link to='about' duration={1500} smooth={true} hashSpy={true}>
          <ArrowDown className={styles.arrowDown} />
        </Link>
      </section>
  )
};
