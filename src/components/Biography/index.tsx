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
          <p>
            `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur at blanditiis consequuntur cumque
            doloremque eos ipsam quae, <span className={styles.contrastText}>quia quo reiciendis</span>? Cum deserunt
            illo minus molestias quae quasi rem repudiandae vel.`
          </p>
        </div>
      </div>
  )
};
