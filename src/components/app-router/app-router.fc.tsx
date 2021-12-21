import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import App from '../../App';
import AlgorithmPage from '../../pages/algorithm/algorithm.page';
import CoutriesPage from '../../pages/countries/countries.page';
import DetailsPage from '../../pages/details/details.page';


const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<App/>}>
        <Route index element={<CoutriesPage />} />
        <Route path='details/:code' element={<DetailsPage />} />
        <Route path='algorithm' element={<AlgorithmPage />} />
      </Route>
    </Routes>
  )
};

export default AppRouter;