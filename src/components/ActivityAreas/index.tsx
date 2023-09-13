import { useCallback, useEffect, useState } from 'react';

import { activityAreas } from '../../assets/consts';

import styles from '../../scss/AboutMe/ActivityAreas/ActivityAreas.module.scss';

export const ActivityAreas = () => {
  // TODO [Dmitriy] - note that number of activity areas matters
  type Modals = Record<string, boolean>;
  const modals: Modals = {
    '0': false,
    '1': false,
    '2': false,
  };
  const [isModalOpen, setIsModalOpen] = useState<Modals>(modals);

  const onButtonClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget as HTMLButtonElement;

    if (isModalOpen[String(target.id)]) setIsModalOpen({ ...modals, [String(target.id)]: false });
    else setIsModalOpen({ ...modals, [String(target.id)]: true });
  };

  const escClickHandler = useCallback((e: KeyboardEvent) => {
    if (e.code === 'Escape') {
      setIsModalOpen({ ...modals });
    }
  }, []);

  const clickOutsideHandler = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;

    const isNotModalId = () => {
      for (const id in modals) {
        if (target?.id === id || target?.className === id) return false;
      }

      return true;
    };

    if (isNotModalId()) setIsModalOpen({ ...modals });
  }, []);

  useEffect(() => {
    document.body.addEventListener('keydown', escClickHandler);
    document.body.addEventListener('click', clickOutsideHandler);

    return () => {
      document.body.removeEventListener('keydown', escClickHandler);
      document.body.removeEventListener('click', clickOutsideHandler);
    }
  }, []);

  return (
      <div className={styles.areasBlock}>
        {
          activityAreas.map((area, idx) =>
              <div className={styles.areaPopup} key={idx}>
                <button id={String(idx)} onClick={onButtonClickHandler} className={styles.classicButton}>
                  <h3 className={String(idx)}>{area.area}</h3>
                </button>
                {
                    isModalOpen[String(idx)] &&
                    <ul className={styles.subArea}>
                      <div className={styles.innerSubArea}>
                        {
                          area.subareas.map((subArea, idx) => <li key={idx}>{subArea}</li>)
                        }
                      </div>
                    </ul>
                }
              </div>)
        }
      </div>
  );
};
