import { useState } from 'react';
import { animated, useScroll } from '@react-spring/web';

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

  const translateHeaderVal = scrollVal > prevScrollVal ? -(scrollVal * 10) : scrollVal * 10;
  // TODO - add mockup

  return (
      <section id='work' className={styles.root}>
        <animated.h2
            style={{
              transform: `translate(${translateHeaderVal}%, 0)`,
            }}
        >Work Work <b>Work</b> Work Work Work Work
        </animated.h2>

        <h3 className={styles.header}>Work Cases</h3>
            <div>
              <h4 className={styles.workCaseHeader}>Animal Zoo Mobile App</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolor illum nostrum rerum velit
                voluptatibus?
                Eius fuga illo iure laudantium pariatur placeat, ut. Eos iure perspiciatis quis sed ullam vel.<br />

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero maxime mollitia quasi sint sunt
                veritatis?
                Autem debitis earum, laborum quisquam quos tempora? Doloribus exercitationem facere laudantium minus
                sequi
                vero voluptas!
              </p>
            </div>
      </section>
  );
};
