import Link from 'next/link';
import { useRouter } from 'next/router';
import { Header } from '../component/Header';
import { Footer } from '../component/Footer';
import { useTranslation, Trans } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../next-i18next.config.mjs';
import { Button } from 'antd';

export default function Home(_props) {
  const { t , i18n } = useTranslation('common');
  const router = useRouter()

  const onToggleLanguageClick = (newLocale) => {
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
  }

  const clientSideLanguageChange = (newLocale) => {
    i18n.changeLanguage(newLocale)
  }

  const changeTo = router.locale === 'en' ? 'zh' : 'fr'

  return (
    <>
      <Header heading={t('company')} title={t('company')} />
          <Link href="/" locale={changeTo}>
            <Button>{t('change-locale', { changeTo })}</Button>
          </Link>
      <Footer />
    </>
  );
}


export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common','footer','header',
      ],nextI18NextConfig)),
    },
  }
}