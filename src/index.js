import 'react-app-polyfill/ie9';
import React from 'react';
import ReactDOM from 'react-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';


import '@gctools-components/aurora-css/css/aurora.min.css';

import { Provider } from 'react-redux';

import oidcClient from './oidcConfig.dev';
import ConnectedAndLocalizedApp from './containers/App';
import * as serviceWorker from './serviceWorker';
import store from './store';

import './assets/css/index.css';

const authToken = () => {
  // get the authentication token from redux store if it exists

  const sessionInfo = JSON.parse(sessionStorage
    .getItem(`oidc.user:${oidcClient.authority}:${oidcClient.client_id}`));

  const token = () => {
    if (sessionInfo) {
      return sessionInfo.access_token ?
        `Bearer ${sessionInfo.access_token}` : '';
    }
    return '';
  };
  return token();
};


const client = new ApolloClient({
  uri: process.env.APOLLO_SERVER,
  request: (operation) => {
    const token = authToken();
    operation.setContext({
      headers: {
        authorization: token,
      },
    });
  },
});

ReactDOM.render(
  <Provider store={store}>
    <ApolloProvider client={client}>
      <ConnectedAndLocalizedApp />
    </ApolloProvider>
  </Provider>,
  document.getElementById('root') // eslint-disable-line comma-dangle
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
