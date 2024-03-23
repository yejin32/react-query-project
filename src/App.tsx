import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ErrorPage from './pages/ErrorPage';
import Mypage from './pages/Mypage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/error' element={<ErrorPage/>}/>
        <Route path='/mypage' element={<Mypage/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;