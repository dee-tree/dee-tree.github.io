import styles from '../../scss/Work/Work.module.scss';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import { animated, useScroll } from '@react-spring/web';
import { scroller } from 'react-scroll';

export const Work = () => {
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
      scroller.scrollTo('work', {
        duration: 1500,
        smooth: true,
      });
    }
  }, [inView]);

  const translateHeaderVal = scrollVal > prevScrollVal ? -(scrollVal * 10) : scrollVal * 10;
  // TODO - add mockup
  // TODO - make container beautifully scroll

  return (
      <section ref={ref} id='work' className={styles.root}>
        <animated.h2
            style={{
              transform: `translate(${translateHeaderVal}%, 0)`,
            }}
        >Work Work <b>Work</b> Work Work Work Work
        </animated.h2>

        <h3 className={styles.header}>Work Cases</h3>
        <div className={styles.scrollableContainer}>
          <h4 className={styles.workCaseHeader}>Animal Zoo Mobile App</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dolor illum nostrum rerum velit voluptatibus?
            Eius fuga illo iure laudantium pariatur placeat, ut. Eos iure perspiciatis quis sed ullam vel.<br/>

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero maxime mollitia quasi sint sunt veritatis?
            Autem debitis earum, laborum quisquam quos tempora? Doloribus exercitationem facere laudantium minus sequi
            vero voluptas!
          </p>
        </div>

      </section>
  );
};
