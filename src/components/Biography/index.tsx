import photo from '../../assets/img/photo.png';

import styles from '../../scss/AboutMe/Biography/Biography.module.scss';

// TODO [Dmitriy] - change bio
export const Biography = () => {

  return (
      <div className={styles.bioBlock}>
        <h3 className={styles.header}>
          Bio
        </h3>
        <div className={styles.bioContainer}>
          <img src={photo} alt='Avatar' />

          <code>
            <span className={styles.orange}>val</span> me = Person(Kind.<span
              className={styles.italicViolet}>SOFTWARE_DEV</span><span className={styles.orange}>,</span><br />
            Kind.<span className={styles.italicViolet}>LANGUAGES_TOOLING_RESEARCH</span>).<span
              className={styles.italicYellow}>apply </span>{'{'}<br />
            <span className={styles.violet}>    age</span> = <span className={styles.blue}>0x16</span><br />
            <span className={styles.violet}>    qualities</span> += <i>listOf</i>(<br />
            {'        Quality.'}<span className={styles.italicViolet}>RESULT_ORIENTED</span><span
              className={styles.orange}>,</span><br />
            {'        Quality.'}<span className={styles.italicViolet}>PROBLEM_SOLVER</span><span
              className={styles.orange}>,</span><br />
            {'        Quality.'}<span className={styles.italicViolet}>CRITICAL_THINKING</span><span
              className={styles.orange}>,</span><br />
            {'        Quality.'}<span className={styles.italicViolet}>IDEAS_OPENED</span><span
              className={styles.orange}>,</span><br />
            {'        Quality.'}<span className={styles.italicViolet}>EXPERIENCED</span><br />
            {'    )'}<br />
            {'}'}<br />
            <br />
            me.workMode(<span className={styles.italicViolet}>INDEPENDENT</span> or <span
              className={styles.italicViolet}>TEAM</span>)
          </code>

        </div>
      </div>
  )
};
