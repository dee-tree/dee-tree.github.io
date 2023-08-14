import { useState } from 'react';
import { animated, useScroll } from '@react-spring/web';

import { Biography } from '../../components';

import styles from '../../scss/AboutMe/AboutMe.module.scss';

export const AboutMe = () => {
  const [scrollVal, setScrollVal] = useState(0);
  const [prevScrollVal, setPrevScrollVal] = useState(0);

  const { scrollYProgress } = useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      setPrevScrollVal(scrollVal);
      setScrollVal(scrollYProgress + 1);
    }
  });

  const translateHeaderVal = scrollVal > prevScrollVal ? -(scrollVal * 10) : scrollVal * 10;
  const translateSkillsVal = scrollVal > prevScrollVal ? (scrollVal * 10) : -(scrollVal * 10);

  // TODO - get rid of refs and Int. Observer

  return (
      <section id='about' className={styles.root}>
        <animated.h2
            style={{
              transform: `translate(${translateHeaderVal}%, 0)`,
            }}
        >About Me <b>About Me</b> About Me About Me About Me
        </animated.h2>

        <div className={styles.activityAreasBlock}>
          <h3 className={styles.header}>
            Activity areas
          </h3>

          <animated.p
              className={styles.skills}
              style={{
                transform: `translate(${translateSkillsVal - 10}%, 0)`,
              }}
          >Android (Java, Kotlin) — Retrofit
          </animated.p>
          <animated.p
              className={styles.skills}
              style={{
                transform: `translate(${-translateSkillsVal + 10}%, 0)`,
              }}
          >Firebase — Python, C — Algorithms
          </animated.p>
          <animated.p
              className={styles.skills}
              style={{
                transform: `translate(${translateSkillsVal - 10}%, 0)`,
              }}
          >Git, Github — OOP principles
          </animated.p>
          <animated.p
              className={styles.skills}
              style={{
                transform: `translate(${-translateSkillsVal + 10}%, 0)`,
              }}
          >Design patterns — Research — Docker
          </animated.p>
        </div>

        <Biography />

      </section>
  );
};
