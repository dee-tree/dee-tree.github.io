import { useEffect, useState } from 'react';
import { animated, useScroll } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { scroller } from 'react-scroll';

import { Biography } from '../../components';

import styles from '../../scss/AboutMe/AboutMe.module.scss';

export const AboutMe = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const [scrollVal, setScrollVal] = useState(0);
  const [prevScrollVal, setPrevScrollVal] = useState(0);

  const { scrollYProgress } = useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      setPrevScrollVal(scrollVal);
      setScrollVal(scrollYProgress + 1);
    }
  });

  useEffect(() => {
    if (inView) {
      scroller.scrollTo('about', {
        duration: 1500,
        smooth: true,
      });
    }
  }, [inView]);

  const translateHeaderVal = scrollVal > prevScrollVal ? -(scrollVal * 10) : scrollVal * 10;
  const translateSkillsVal = scrollVal > prevScrollVal ? (scrollVal * 10) : -(scrollVal * 10);

  return (
      <section ref={ref} id='about' className={styles.root}>
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

          {/*<ActivityAreasGallery />*/}

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
