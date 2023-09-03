import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, EffectCreative, Navigation, Pagination } from 'swiper/modules';

import styles from '../../scss/Work/Work.module.scss';

import { workCasesImages } from '../../assets/consts';

import { WorkCaseProps } from '../../types/WorkCaseProps';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// TODO - remove vh heights in roots

const boxVariant = {
  visible: { opacity: 1, x: 0, y: 0, transition: { duration: 1, ease: 'backInOut' } },
  hidden: { opacity: 0, x: -200, y: 200 }
};

export const WorkCase = ({ title, description, images, link }: WorkCaseProps) => {
  const control = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

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
        <Swiper
            className={styles.carousel}
            grabCursor={true}
            effect={'creative'}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }}
            modules={[EffectCreative, Navigation, Pagination, A11y]}
            navigation
            pagination={{ clickable: true }}
        >
          {
            images.map(
                (image, idx) => <SwiperSlide key={idx}>
                  <img className={styles.workCaseImg} src={workCasesImages[image]} alt='Work Case' />
                </SwiperSlide>)
          }
        </Swiper>
      </motion.div>
  );
};
