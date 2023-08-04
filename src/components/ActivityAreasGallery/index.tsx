import { ActivityCard } from '../ActivityCard';

import { activities } from '../../consts';

import styles from '../../scss/AboutMe/AboutMe.module.scss';

export const ActivityAreasGallery = () => {
  return (
      <div className={styles.activityGallery}>
        {
          activities.map((activity, idx) => <ActivityCard key={idx} value={activity} />)
        }
      </div>
  )
};
