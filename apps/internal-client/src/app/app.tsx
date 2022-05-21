import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';

export function App() {
  return (
    <>
      <h1>Hello world!</h1>
      <div />
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
