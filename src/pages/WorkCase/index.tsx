import { useNavigate, useParams } from 'react-router-dom';

import { workCases } from '../../assets/consts';

import { ReactComponent as ArrowLeft } from '../../assets/img/arrow-left-icon.svg';

import styles from '../../scss/WorkCase/WorkCase.module.scss';

export const WorkCase = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const workCase = workCases.find((c) => c.id === id);

  const onBackButtonHandler = () => {
    navigate(-1);
  };

  return (
      <section className={styles.root}>
        {
          workCase
              ?
              <div className={styles.titleBlock}>
                <ArrowLeft onClick={onBackButtonHandler} className={styles.arrowBackLink} />
                <h2>{workCase.title}</h2>
              </div>
              : <div><h2>Oops! Nothing found</h2></div>
        }

      </section>
  );
};
