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
            <span className={styles.orange}>val</span> me = Person(<br />
            {'\tKind.'}<span className={styles.italicViolet}>SOFTWARE_DEV</span><span className={styles.orange}>,</span><br />
            {'\tKind.'}<span className={styles.italicViolet}>PROGRAM_ANALYSIS</span><span className={styles.orange}>,</span><br />
            {'\tKind.'}<span className={styles.italicViolet}>LANGUAGES_TOOLING_RESEARCH</span><br />
            ).<span className={styles.italicYellow}>apply </span>{'{'}<br />
            <span className={styles.violet}>{'\tage'}</span> = <span className={styles.blue}>0x16</span><br />
            <span className={styles.violet}>{'\tqualities'}</span> += <i>listOf</i>(<br />
            {'\t\tQuality.'}<span className={styles.italicViolet}>RESULT_ORIENTED</span><span className={styles.orange}>,</span><br />
            {'\t\tQuality.'}<span className={styles.italicViolet}>ANALYTICAL_THINKING</span><span className={styles.orange}>,</span><br />
            {'\t\tQuality.'}<span className={styles.italicViolet}>PHILOMATH</span><span className={styles.orange}>,</span><br />
            {'\t\tQuality.'}<span className={styles.italicViolet}>INITIATIVE</span><span className={styles.orange}>,</span><br />
            {'\t\tQuality.'}<span className={styles.italicViolet}>ASSERTIVE</span><span className={styles.orange}>,</span><br />
            {'\t\tQuality.'}<span className={styles.italicViolet}>RELIABILITY</span><br />
            {'\t)'}<br />
            {'}'}<br />
            <br />
            me.workMode(<span className={styles.italicViolet}>INDEPENDENT</span> or <span
              className={styles.italicViolet}>TEAM</span>)
          </code>

        </div>
      </div>
  )
};
