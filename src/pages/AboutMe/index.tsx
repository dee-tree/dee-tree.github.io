import { useEffect, useState } from 'react';
import { animated, useScroll } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { scroller } from 'react-scroll';

import { ActivityAreasGallery } from '../../components';

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

  const translateVal = scrollVal > prevScrollVal ? -(scrollVal * 10) : scrollVal * 10;

  return (
      <section ref={ref} id='about' className={styles.root}>
        <animated.h2
            style={{
              transform: `translate(${translateVal}%, 0)`,
            }}
        >About Me About Me About Me About Me About Me
        </animated.h2>
        <h3 className={styles.header}>
          Activity areas
        </h3>
        <ActivityAreasGallery />
      </section>
  );
};
