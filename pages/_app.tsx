import '../src/assets/styles/globals.scss';
import React from 'react';
import { store } from '../src/store/store';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
