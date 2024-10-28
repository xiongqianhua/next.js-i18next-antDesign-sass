import React,{ Suspense }  from 'react';
import { ConfigProvider } from 'antd';
import { appWithTranslation } from 'next-i18next'
import "@/styles/global.scss";

const MyApp = ({ Component, pageProps }) => (
  <ConfigProvider>
    <Component {...pageProps} />
  </ConfigProvider>
);
export default appWithTranslation(MyApp)

