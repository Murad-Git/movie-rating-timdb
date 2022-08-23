import '../styles/globals.scss';
import MainProvider from '../store/main.context';

function MyApp({ Component, pageProps }) {
  return (
    <MainProvider>
      <Component {...pageProps} />
    </MainProvider>
  );
}

export default MyApp;
