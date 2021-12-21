import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';

import countriesClient from './services/apollo'

import AppRouter from './components/app-router/app-router.fc';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={countriesClient}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
