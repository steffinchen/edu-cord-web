import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ThemeProvider from '@kiwicom/orbit-components/lib/ThemeProvider';
import getTheme from './theme';
import i18n from './i18n';

i18n.init().then(() =>
  ReactDOM.render(
    <ThemeProvider
      theme={{ yourCustomTheme: { black: '#000' }, orbit: getTheme() }}
    >
      <App />
    </ThemeProvider>,
    document.getElementById('root')
  )
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
