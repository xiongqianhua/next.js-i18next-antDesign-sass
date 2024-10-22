import Link from 'next/link'
import { useRouter } from 'next/router'
import { Header } from '../component/Header';
import { Footer } from '../component/Footer';
import { useTranslation, Trans } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import nextI18NextConfig from '../next-i18next.config.mjs';
import { Button } from 'antd';

export default function Page(_props) {
  const router = useRouter()
  const { t } = useTranslation();

  return (
    <Button
      type="button"
      onClick={() => {
        router.push({
          pathname: '/post/[pid]',
          query: { pid: post.id },
        })
      }}
    >
    {t('company')}
    </Button>
  )
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
