import React, { useState } from 'react';

import { useTranslation } from 'next-i18next'
import {
  getStaticPaths,
  getI18nProps,
} from '@/lib/getStatic'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import ContentComponents from '@/component/content';
import { LogoutOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import i18nextConfig from '@/next-i18next.config';

const { Header, Content, Footer } = Layout;
const SecondPage = ({ someOtherData }) => {
  const { t } = useTranslation(['home']);
  const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();
  const [select, setSelect] = useState([0]);
  const router = useRouter();
  const items = [{
    key: 0,
    label: t('menuList1'),
  },
  {
    key: 1,
    label: t('menuList2'),
  },
  {
    key: 2,
    label: t('menuList3'),
  },
  {
    key: 3,
    label: t('menuList4'),
  }
  ]
  const onSelect = (e) => {
    setSelect(e.key)
  }
  const loginOut = () => {
    const locale = router.query.locale || i18nextConfig.i18n.defaultLocale
    router.push(`/${locale}/`)
  }
  return (
    <>
      <main>
        <Layout>
          <Header
            style={{
              position: 'sticky',
              top: 0,
              zIndex: 1,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div className="demo-logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[0]}
              items={items}
              style={{
                flex: 1,
                minWidth: 0,
              }}
              onSelect={onSelect}
            />
            <div className='login-out' onClick={loginOut}><LogoutOutlined /><span className='text'>{t('loginOut')}</span></div>
          </Header>
          <Content
            style={{
              padding: '0 48px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
              items={[
                {
                  title: 'Home',
                },
              ]}
            >
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 380,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              <ContentComponents type={select} />
            </div>
          </Content>
          <Footer
            style={{
              textAlign: 'center',
            }}
          >
            {t('p1')}
          </Footer>
        </Layout>
      </main>
    </>
  )
}

export default SecondPage
export { getStaticPaths }
export const getStaticProps = async ctx => {
  const someOtherData = 'hello world'
  return {
    props: {
      ...(await getI18nProps(ctx, [
        'home',
      ])),
      someOtherData,
    },
  }
}
