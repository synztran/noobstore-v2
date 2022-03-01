import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@moai/core/dist/bundle.css";
import "@moai/core/dist/font/remote.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
