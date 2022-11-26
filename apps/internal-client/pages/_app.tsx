import { Navbar } from 'flowbite-react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';
import './styles.css';

/**
 * The base CustomApp component definition
 *
 * TODO: Add theme change logic using useTheme hook
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
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand>
          <Link href="/">nx-template</Link>
        </Navbar.Brand>
      </Navbar>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
