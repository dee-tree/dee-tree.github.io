import { useState } from 'react';
import { animated, useScroll } from '@react-spring/web';
import { TypeAnimation } from 'react-type-animation';

import { speedOfHeaders } from '../../assets/consts';

import styles from '../../scss/Contact/Contact.module.scss';

export const Contact = () => {
  const [scrollVal, setScrollVal] = useState(0);
  const [prevScrollVal, setPrevScrollVal] = useState(0);

  const { scrollYProgress } = useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      setPrevScrollVal(scrollVal);
      setScrollVal(scrollYProgress + 1);
    }
  });

  const translateHeaderVal = scrollVal > prevScrollVal ? -(scrollVal * speedOfHeaders) : scrollVal * speedOfHeaders;

  return (
      <section id='contact' className={styles.root}>
        <animated.h2
            className={styles.animatedH2}
            style={{
              transform: `translate(${translateHeaderVal}%, 0)`,
            }}
        >in touch Get in touch <b>Get in touch</b> Get in touch
        </animated.h2>

        <div className={styles.contactContainer}>
          <p className={styles.ctaText}>Just hit me up<br /> to make your project<br />
            <span className={styles.contrastText}>
          <TypeAnimation
              sequence={[
                ' smart.',
                1000,
                ' awesome.',
                1000,
                ' perfect.',
                1000,
              ]}
              speed={10}
              repeat={Infinity}
          />
          </span>
          </p>

          <div className={styles.contactBlock}>
            <button className={styles.classicButton}
                    onClick={() => navigator.clipboard.writeText('codemitry@gmail.com')}><a
                href='mailto:codemitry@gmail.com'><h3>Email</h3></a></button>
            <button className={styles.classicButton}><a target='_blank' rel='noopener noreferrer' href='https://github.com/dee-tree'><h3>Github</h3></a></button>
          </div>
        </div>
      </section>
  );
};
