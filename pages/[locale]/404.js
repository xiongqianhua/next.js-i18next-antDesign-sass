import { getStaticPaths, makeStaticProps } from '@/lib/getStatic'
import Link from '@/component/Link'
import React from 'react';
import { Result,Button} from 'antd';
import { useTranslation } from 'next-i18next'

const Homepage = () => {
  const { t } = useTranslation(['404','common'])
  return (<Result
    status="404"
    title={t('title')}
    subTitle={t('h1')}
    extra={<Link href="/">
      <Button type="button">{t('common:back-to-home')}</Button>
    </Link>}
  />)
}
export default Homepage;

const getStaticProps = makeStaticProps(['404', 'common'])
export { getStaticPaths, getStaticProps }