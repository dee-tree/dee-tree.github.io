import { useState } from 'react';

import { ActivityCard } from '../ActivityCard';

import { activities } from '../../consts';

import { ReactComponent as ArrowRight } from './../../assets/right-arrow-icon.svg';
import { ReactComponent as ArrowLeft } from './../../assets/left-arrow-icon.svg';

import styles from '../../scss/AboutMe/AboutMe.module.scss';

export const ActivityAreasGallery = () => {
  // TODO - carousel for future
  const [index, setIndex] = useState(0);
  const [disabledLeft, setDisabledLeft] = useState(true);
  const [disabledRight, setDisabledRight] = useState(false);

  const slideLeft = () => {
    if (index - 1 >= 0) {
      if (disabledRight) setDisabledRight(false);
      setIndex(index - 1);
      if (index - 1 === 0) setDisabledLeft(true);
    }
  };

  const slideRight = () => {
    if (index + 1 <= activities.length - 1) {
      if (disabledLeft) setDisabledLeft(false);
      setIndex(index + 1);
      if (index + 1 === activities.length - 1) setDisabledRight(true);
    }
  };

  return (
      <div className={styles.activityGallery}>
        <ArrowLeft className={`${styles.arrow} ${styles.left} ${disabledLeft && styles.disabled}`}
                   onClick={slideLeft} />
        {
          activities.map((activity, n) => {
            const position = n > index ? 'next' : n === index ? 'active' : 'prev';
            return <ActivityCard key={n} value={activity} cardStyle={position} />
          })
        }
        <ArrowRight className={`${styles.arrow} ${styles.right} ${disabledRight && styles.disabled}`}
                    onClick={slideRight} />
      </div>
  )
};
