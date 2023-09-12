import { useState } from 'react';
import { animated, useScroll } from '@react-spring/web';

import { ActivityAreas, Biography } from '../../components';

import { speedOfHeaders } from '../../assets/consts';

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

  const translateHeaderVal = scrollVal > prevScrollVal ? -(scrollVal * speedOfHeaders) : scrollVal * speedOfHeaders;
  const translateSkillsVal = scrollVal > prevScrollVal ? (scrollVal * 10) : -(scrollVal * 10);

  return (
      <section id='about' className={styles.root}>
        <animated.h2
            className={styles.animatedH2}
            style={{
              transform: `translate(${translateHeaderVal}%, 0)`,
            }}
        >About Me <b>About Me</b> About Me About Me About Me
        </animated.h2>

        <div className={styles.activityAreasBlock}>
          <h3 className={styles.header}>
            Activity areas
          </h3>

          <ActivityAreas />
        </div>

        <Biography />
      </section>
  );
};
