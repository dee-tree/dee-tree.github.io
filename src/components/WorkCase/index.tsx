import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

import styles from '../../scss/Work/Work.module.scss';

import { WorkCaseProps } from '../../types/WorkCaseProps';
import { workCasesImages } from '../../consts';

// TODO - carousel for images

const boxVariant = {
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1, ease: 'easeOut' } },
  hidden: { opacity: 0, x: -500, y: 200 }
};

export const WorkCase = ({ title, description, image, link }: WorkCaseProps) => {
  const control = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.01, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
      <motion.div className={styles.workCaseBlock} ref={ref} variants={boxVariant} initial='hidden' animate={control}>
        <a target='_blank' rel='noopener noreferrer' className={styles.workCaseLink} href={link}>
          <h4 className={styles.workCaseHeader}>{title}</h4>
        </a>
        <p>
          {description}
        </p>
        <img className={styles.workCaseImg} src={workCasesImages[image]} alt='Work Case' />
      </motion.div>
  );
};
