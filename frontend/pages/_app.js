import { Component } from 'react';

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
