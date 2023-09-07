import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate, useParams } from 'react-router-dom';

import { workCases, workCasesImages } from '../../assets/consts';

import { ReactComponent as ArrowLeft } from '../../assets/img/arrow-left-icon.svg';
import { ReactComponent as GithubIcon } from '../../assets/img/github-icon.svg';
import { ReactComponent as GooglePlayIcon } from '../../assets/img/google-play-icon.svg';

import { A11y, EffectCreative, Navigation, Pagination } from 'swiper/modules';

import styles from '../../scss/WorkCase/WorkCase.module.scss';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const WorkCase = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const workCase = workCases.find((c) => c.id === id);

  const onBackButtonHandler = () => {
    navigate(-1);
  };

  return (
      <main className={styles.container}>
        <section className={styles.root}>
          {
            workCase
                ?
                <>
                  <div className={styles.titleBlock}>
                    <ArrowLeft onClick={onBackButtonHandler} className={styles.arrowBackLink} />
                    <h2>{workCase.title}</h2>
                  </div>
                  <div className={styles.addInfoBlock}>
                    <a target='_blank' rel='noopener noreferrer' href={workCase.links[0]}><GithubIcon /></a>
                    {workCase.links[1] &&
                        <a target='_blank' rel='noopener noreferrer' href={workCase.links[1]}><GooglePlayIcon /></a>}
                  </div>
                  <p className={styles.description}>
                    {workCase.description}
                  </p>
                  <Swiper
                      className={styles.carousel}
                      grabCursor={true}
                      effect={'creative'}
                      creativeEffect={{
                        prev: {
                          shadow: true,
                          translate: [0, 0, -400],
                        },
                        next: {
                          translate: ['100%', 0, 0],
                        },
                      }}
                      modules={[EffectCreative, Navigation, Pagination, A11y]}
                      navigation
                      pagination={{ clickable: true }}
                  >
                    {
                      workCase.images.map(
                          (image, idx) => <SwiperSlide key={idx}>
                            <img className={styles.workCaseImg} src={workCasesImages[image]} alt='Work Case' />
                          </SwiperSlide>)
                    }
                  </Swiper>
                </>
                :
                <div className={styles.errorBlock}>
                  <h2>Oops! Nothing found</h2>
                  <button className={styles.classicButton} onClick={() => navigate('/')}><h3>Back Home</h3></button>
                </div>
          }
        </section>
      </main>
  );
};
