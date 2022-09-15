import './App.css';
import HomePage from './Components/Pages/HomePage';
import ManagersPage from './Components/Pages/ManagersPage';
import DriversPage from './Components/Pages/DriversPage';
import Header from './Components/Extras/Header';
import NotFoundPage from './Components/Pages/NotFoundPage';

import 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <div className="AppMain">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/driversPage" element={<DriversPage />} />
          <Route path="/ManagersPage" element={<ManagersPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
    </BrowserRouter >
  );
}

export default App;
