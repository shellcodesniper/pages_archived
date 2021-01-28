import TopNavbar from '@components/shared/Top';
import Footer from '@components/shared/Footer';
import Head from 'next/head';
import React, { ReactNode } from 'react';
import { FunctionComponent } from 'react';

type Props = {
  isLoggedIn: boolean;
  currentPage: string;
  children?: ReactNode
  title?: string | undefined;
}

const Layout: FunctionComponent<Props> = (props: Props) => {
  return (
    <div>
      <Head>
        <title>{ props.title ? props.title : 'SANDMOOD'}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <TopNavbar isLoggedIn={props.isLoggedIn} currentPage={props.currentPage} />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
