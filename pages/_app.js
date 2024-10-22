import React,{ Suspense }  from 'react';
import { ConfigProvider } from 'antd';
import { appWithTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config.mjs'
import theme from '@/theme/themeConfig';
import "@/styles/global.scss";

const App = ({ Component, pageProps }) => (
  <Suspense fallback="loading">
    <ConfigProvider theme={theme}>
        <Component {...pageProps} />
    </ConfigProvider>
  </Suspense>
);

export default appWithTranslation(App,nextI18NextConfig);

