import { Route, Routes } from 'react-router-dom';

import { MainLayout } from './layouts';
import { WorkCase } from './pages';

export const App = () => {
  return (
      <>
        <Routes>
          <Route path='/' element={<MainLayout />} />
          <Route path='/case/:id' element={<WorkCase />} />
          {/*TODO - BLOG*/}
        </Routes>
      </>
  );
};
