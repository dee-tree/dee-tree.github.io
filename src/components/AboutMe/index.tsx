import styles from '../../scss/AboutMe/AboutMe.module.scss';
import { ParallaxText } from '../ParallaxText';

export const AboutMe = () => {
  return (
      <section className={styles.root}>
        <ParallaxText baseVelocity={3}>About Me</ParallaxText>

      </section>
  );
};
