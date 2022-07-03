import React from 'react';
import { Toaster } from 'react-hot-toast';

import { Layout } from '../components';
import '../styles/globals.css';
import { StatContext } from '../context/StateContext';

function MyApp({ Component, pageProps }) {
  return(
    <StatContext>
      <Layout>
        <Toaster/>
        <Component {...pageProps} />  
      </Layout>
    </StatContext>
  ) 
}

export default MyApp
