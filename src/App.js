import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalContext from './context/GloblalContext';
import Hotjar from '@hotjar/browser';
import { Fade } from 'react-awesome-reveal';
import OnClick from './pages/OnClick';
import Policy from './pages/Policy';
import Formulario from './components/Formulario'

function App() {
  const [themeColor, setThemeColor] = useState(localStorage.getItem('hs_theme') || 'light');

  function toggleTheme() {
    setThemeColor(themeColor === 'light' ? 'light' : 'dark');
  }

  const siteId = 3701849;
  const hotjarVersion = 6;

  Hotjar.init(siteId, hotjarVersion);

  return (
    <BrowserRouter
      basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <GlobalContext.Provider value={{ theme: themeColor, toggleTheme }}>
                <Fade duration={2000}>
                  <hr className='dark:border-sub-blue' />
                  <Formulario />
                </Fade>
              </GlobalContext.Provider>
            </>
          }
        />
        <Route path="/OnClick" element={<OnClick />} />
        <Route
          path="/Policy"
          element={
            <Policy />
          } />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
