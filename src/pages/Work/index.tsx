import { useState } from 'react';
import { animated, useScroll } from '@react-spring/web';

import styles from '../../scss/Work/Work.module.scss';
import { workCases } from '../../consts';
import { WorkCase } from '../../components';

export const Work = () => {
  const [scrollVal, setScrollVal] = useState(0);
  const [prevScrollVal, setPrevScrollVal] = useState(0);

  const { scrollYProgress } = useScroll({
    onChange: ({ value: { scrollYProgress } }) => {
      setPrevScrollVal(scrollVal);
      setScrollVal(scrollYProgress + 1);
    }
  });

  const translateHeaderVal = scrollVal > prevScrollVal ? -(scrollVal * 10) : scrollVal * 10;
  // TODO - add mockup
  // TODO - Work Case Page

  return (
      <section id='work' className={styles.root}>
        <animated.h2
            style={{
              transform: `translate(${translateHeaderVal}%, 0)`,
            }}
        >Work Work <b>Work</b> Work Work Work Work
        </animated.h2>

        <h3 className={styles.header}>Work Cases</h3>

        {workCases.map((c, idx) => <WorkCase {...c} key={idx} />)}
      </section>
  );
};
