import styles from '../../scss/AboutMe/AboutMe.module.scss';

export const ActivityCard = ({ value, cardStyle }: { value: string, cardStyle: string }) => {
  // TODO - NOT USED - may be useful in the future
  const additionalStyles = cardStyle === 'prev' ? styles.prev : (cardStyle === 'next' ? styles.next : styles.active);

  return (
      <article className={`${styles.activityCard} ${additionalStyles}`}>
        <p>{value}</p>
      </article>
  )
};
