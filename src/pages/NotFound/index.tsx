import { useNavigate } from 'react-router-dom';

import styles from '../../scss/NotFound/NotFound.module.scss';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
      <div className={styles.errorBlock}>
        <h2>Oops! Nothing found</h2>
        <button className={styles.classicButton} onClick={() => navigate('/')}><h3>Back Home</h3></button>
      </div>
  );
};
