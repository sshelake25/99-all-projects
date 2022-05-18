import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import UserPage from './pages/UserPage';

import HeaderLayout from './layout/HeaderLayout';
import FooterLayout from './layout/FooterLayout';

export default function App() {
  return (
    <div className="App">
      <HeaderLayout></HeaderLayout>
      <br></br>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
      <FooterLayout></FooterLayout>
    </div>
  );
}