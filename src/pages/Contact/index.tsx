import { useState } from 'react';
import { animated, useScroll } from '@react-spring/web';

import styles from '../../scss/Contact/Contact.module.scss';

// TODO - carry out all 'overflow' properties in root in scss modules to 1 place
// TODO - light background color + gradient?
export const Contact = () => {
  const [scrollVal, setScrollVal] = useState(0);
  const [prevScrollVal, setPrevScrollVal] = useState(0);

  const { scrollYProgress } = useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      setPrevScrollVal(scrollVal);
      setScrollVal(scrollYProgress + 1);
    }
  });

  const translateHeaderVal = scrollVal > prevScrollVal ? -(scrollVal * 10) : scrollVal * 10;

  return (
      <section id='contact' className={styles.root}>
        <animated.h2
            style={{
              transform: `translate(${translateHeaderVal}%, 0)`,
            }}
        >in touch <b>Get in touch</b> Get in touch Get in touch
        </animated.h2>
      </section>
  );
};
