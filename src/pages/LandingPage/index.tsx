import { ReactComponent as Logo } from './../../assets/logo.svg';
import { ReactComponent as ArrowDown } from './../../assets/arrow-down.svg';

import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

import styles from '../../scss/LandingPage/LandingPage.module.scss';

// TODO - arrow scroll up
export const LandingPage = () => {
  return (
      <section className={styles.root}>
        <div className={styles.dynamicBlock}>
        <Link to={'/'}><Logo className={styles.logo} /></Link>

        <h1 className={styles.hiText}>
          Hi there! I’m Dmitriy.<br />
          An enthusiastic
          <span className={styles.contrastText}>
          <TypeAnimation
              sequence={[
                ' developer.',
                1000,
                ' researcher.',
                1000,
                ' creator.',
                1000,
              ]}
              speed={10}
              repeat={Infinity}
          />
        </span>
        </h1>
        </div>

        <ScrollLink to='about' duration={1500} smooth={true} hashSpy={true} className={styles.arrowDownLink}>
          <ArrowDown className={styles.arrowDown} />
        </ScrollLink>
      </section>
  )
};
