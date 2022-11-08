import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

/**
 * The base CustomApp component definition
 *
 * @param root0 AppProps
 * @param root0.Component the component to render on this page
 * @param root0.pageProps the props to pass to the component rendered
 */
function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Nx Template</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
