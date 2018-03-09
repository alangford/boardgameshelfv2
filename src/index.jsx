import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import createHistory from 'history/createBrowserHistory';
import deepPurple from 'material-ui/colors/deepPurple';
import grey from 'material-ui/colors/grey';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import store from './data/store';


global.requestAnimationFrame = function (callback) {
  setTimeout(callback, 0);
};
const history = createHistory();
const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: grey,
    primaryText: {
      color: grey['50'],
      'font-size': '15px',
    },
    secondaryText: {
      color: grey['900'],
      'font-size': '13px',
    },
  },
});

ReactDOM.render(
  <Provider store={ store }>
    <MuiThemeProvider theme={ theme }>
      <Router history={ history }>
        <div>
          <App />
        </div>
      </Router>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root') || document.createElement('div') // or document.createElement is for testing purposes!,
);
registerServiceWorker();
