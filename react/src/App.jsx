import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Index } from './components/frontend/Index';
import { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { getSupportedLocales } from './helper';



function App() {
  const translator = getSupportedLocales();

  const [locale, setLocale] = useState('en'); // state for current locale

  const handleLanguageChange = (selectedLocale) => {
    setLocale(selectedLocale);
  };


  return (
      <IntlProvider locale={locale} messages={translator[locale]} >
        <Router>
          <Routes>
            <Route exact path="/" element={<Index handleLanguageChange={handleLanguageChange}/>} />
          </Routes>
        </Router>
      </IntlProvider>
  )
}

export default App
