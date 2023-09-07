import { useState } from 'react';
import { animated, useScroll } from '@react-spring/web';

import { WorkCase } from '../../components';

import { speedOfHeaders, workCases } from '../../assets/consts';

import styles from '../../scss/Work/Work.module.scss';

export const Work = () => {
  const [scrollVal, setScrollVal] = useState(0);
  const [prevScrollVal, setPrevScrollVal] = useState(0);

  const { scrollYProgress } = useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      setPrevScrollVal(scrollVal);
      setScrollVal(scrollYProgress + 1);
    }
  });

  const translateHeaderVal = scrollVal > prevScrollVal ? -(scrollVal * speedOfHeaders) : scrollVal * speedOfHeaders;
  // TODO - add mockup
  // TODO - Work Case Page

  return (
      <section id='work' className={styles.root}>
        <animated.h2
            className={styles.animatedH2}
            style={{
              transform: `translate(${translateHeaderVal}%, 0)`,
            }}
        >Work Work <b>Work</b> Work Work Work Work
        </animated.h2>

        <h3 className={styles.header}>Work Cases</h3>

        {workCases.map((c) => <WorkCase {...c} key={c.id} />)}
      </section>
  );
};
