import { HeaderBar, SideNav } from '@nx-template/common-react';
import { lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/dashboard-page/dashboard-page';

const NotFoundPage = lazy(
  () => import('./pages/not-found-page/not-found-page')
);

export function App() {
  const [sideNavOpened, setSideNavOpened] = useState(false);

  function handleSideNavToggle() {
    setSideNavOpened(!sideNavOpened);
  }

  return (
    <>
      <HeaderBar
        hideMenu={true}
        onHamburgerClick={handleSideNavToggle}
      ></HeaderBar>
      <SideNav opened={sideNavOpened} onClose={handleSideNavToggle}></SideNav>
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
