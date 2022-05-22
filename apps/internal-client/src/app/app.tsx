import { HeaderBar } from '@nx-template/common-react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/dashboard-page/dashboard-page';

const NotFoundPage = lazy(
  () => import('./pages/not-found-page/not-found-page')
);

export function App() {
  function handleHamburgerClick() {
    console.log('test with handle click');
  }
  return (
    <>
      <HeaderBar
        hideMenu={true}
        onHamburgerClick={handleHamburgerClick}
      ></HeaderBar>
      <main>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
