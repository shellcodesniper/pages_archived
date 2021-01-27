import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppProps } from 'next/app'

import '@stylesheets/application.css';
import '@stylesheets/top.css';
import '@stylesheets/common.css';

const SandMoodApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
}

SandMoodApp.getInitialProps = async ({ Component, ctx}: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};
  // const cookie = (process.browser) ? '' : ctx.req!.headers.cookie;

  // console.log(ctx);

  // if (process.browser && cookie) {
  //   Axios.defaults.headers.Cookie = cookie;
  // }
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
}

export default SandMoodApp;
