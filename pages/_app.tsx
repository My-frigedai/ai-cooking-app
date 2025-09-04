import type { AppProps } from 'next/app';
import '../pages/styles/Home.module.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}