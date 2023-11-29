import '@/styles/globals.css'
import { locallogger } from '@/utils/locallogger';

import { logger } from 'logging-lib';


import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  logger.info('I AM Logged using my custom logger library.');
  locallogger.info('I AM Logged using the local logging function.');
  
  return <Component {...pageProps} />
}

App.getInitialProps = async (ctx: any) => {
  return { test: true }
}