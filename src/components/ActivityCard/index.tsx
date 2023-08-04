import styles from '../../scss/AboutMe/AboutMe.module.scss';

export const ActivityCard = ({ value }: { value: string }) => {
  return (
      <div className={styles.activityCard}>
        <p>{value}</p>
      </div>
  )
};
