import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScreenShowsPage from '../pages/ScreenShowsPage';
import HomePage from '../pages/HomePage';
import Header from './Header';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/screen-shows" element={<ScreenShowsPage />} />
        </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;