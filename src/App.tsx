import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ErrorPage from './pages/ErrorPage';
import Mypage from './pages/Mypage';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
          {(windowWidth >= 320 && windowWidth < 770) && (
            <>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/mypage' element={<Mypage/>}/>
            <Route path='/error' element={<ErrorPage/>}/>
            </>
            )}
            {windowWidth >= 770 && <Route path='*' element={'해상도 에러'}/>}
            
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
};

export default App;