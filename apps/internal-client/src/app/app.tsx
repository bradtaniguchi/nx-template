import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from './pages/dashboard-page/dashboard-page';

const NotFoundPage = lazy(
  () => import('./pages/not-found-page/not-found-page')
);

export function App() {
  return (
    <>
      <h1>Hello world!</h1>
      <div />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
