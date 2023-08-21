import { Route, Routes } from 'react-router-dom';
import { BottomMenu } from './components';

import styles from './scss/App.module.scss';
import { MainLayout } from './layouts';

// TODO - burgerMenu icon animation
//      - gradient, while moving to another section

export const App = () => {
  return (
      <>
        <div className={styles.container}>
          <Routes>
            <Route path='/' element={<MainLayout />} />
            {/*TODO - BLOG*/}
          </Routes>
        </div>
        <BottomMenu />
      </>
  );
};
