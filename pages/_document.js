import Document,{
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'
import i18nextConfig from '@/next-i18next.config'
import { useTranslation } from 'next-i18next'
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs';

export default function MyDocument(props) {
  const { t } = useTranslation(['common'])

  const currentLocale =
    props.__NEXT_DATA__.query.locale ||
    i18nextConfig.i18n.defaultLocale
  const meta = {
    url: "https://petmindreader.com",
    image: "https://petmindreader.com/cat.png",
    socialImageURL: "https://petmindreader.com/cat.png",
    title: t('title'),
    description: t('description'),
  };
  return (
    <Html lang={currentLocale}>
      <Head>
        <meta property="og:title" content={meta.title} key="title" />
        <meta property="og:description" content={meta.description} key="description" />

        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.description} />
        <meta name="author" content="https://petmindreader.com" />
        <meta name="keywords" content="Cat, mind reader" />
        <meta name="generator" content="https://petmindreader.com" />

        <meta property="og:type" content='website' />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={meta.url} />
        <meta property="og:image" content={meta.socialImageURL} />

        <meta property="twitter:card" content='summary_large_image' />
        <meta property="twitter:title" content={meta.title} />
        <meta property="twitter:description" content={meta.description} />
        <meta property="twitter:url" content={meta.url} />
        <meta property="twitter:image" content={meta.socialImageURL} />

        <meta name="apple-mobile-web-app-capable" content="yes" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )

}

MyDocument.getInitialProps = async (ctx) => {
  const cache = createCache();
  const originalRenderPage = ctx.renderPage;
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => (
        <StyleProvider cache={cache}>
          <App {...props} />
        </StyleProvider>
      ),
    });

  const initialProps = await Document.getInitialProps(ctx);
  const style = extractStyle(cache, true);
  return {
    ...initialProps,
    styles: (
      <>
        {initialProps.styles}
        <style dangerouslySetInnerHTML={{ __html: style }} />
      </>
    ),
  };
};
