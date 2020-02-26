import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import logo from './logo.svg';
import './App.css';


function App() {
  const { t, i18n } = useTranslation();

  const changeLang = (lang: string) => i18n.changeLanguage(lang);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Trans i18nKey="intro">
            Edit <code>src/App.tsx</code> and save to reload.
          </Trans>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('learn')}
        </a>
        <div className="langBtnsDiv">
          <button className="langBtn" onClick={() => changeLang('en')}>
            {t('buttons.en')}
          </button>
          <button className="langBtn" onClick={() => changeLang('es')}>
            {t('buttons.es')}
          </button>
        </div>
      </header>
    </div >
  );
}

export default App;
