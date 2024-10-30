import React,{useEffect,useState} from 'react';
import { Button, message, Form, Input, Flex, Layout } from 'antd';
import { useTranslation } from 'next-i18next'
import {
    getStaticPaths /*, makeStaticProps*/,
    getI18nProps,
} from '@/lib/getStatic';
import LanguageMenu from '@/component/LanguageMenu';
import { useRouter } from 'next/router';
import i18nextConfig from '@/next-i18next.config';
import { UserSwitchOutlined } from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;
const headerStyle = {
    textAlign: 'right',
    color: '#4096ff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#fff',
};
const footerStyle = {
    textAlign: 'center',
    color: '#4096ff',
    height: 64,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: '#fff',
};
const Login = ({ someOtherData }) => {
    const [messageApi, contextHolder] = message.useMessage();
    const [loadings, setLoadings] = useState(false);
    const { t } = useTranslation(['common'])
    const router = useRouter()
    const onFinish = (values) => {
        setLoadings(true)
        console.log('Success:', values);
        if(values.username === 'super' && values.password === 'super'){
            const locale = router.query.locale || i18nextConfig.i18n.defaultLocale
            router.push(`/${locale}/home`);
        }else{
            messageApi.open({
                type: 'error',
                content: t('p5'),
            });
        }
        setLoadings(false)
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
        messageApi.open({
            type: 'error',
            content: errorInfo,
        });
    };
    return <Layout className=''>
        <Header style={headerStyle}>
        {t('languageSwitch')}<LanguageMenu/>
        </Header>
        <Content>
            <div className='loginPage '>
                <div className='systemTitleStyle'>
                    <div className='logo'></div>
                    <div className='text-focus-in'>{t('systemTitle')}</div>
                </div>
                <Form
                    name="basic"
                    labelCol={{
                        span: 4,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    className='loginForm'
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label={t('Username')}
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: t('p2'),
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label={t('Password')}
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: t('p1'),
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 4,
                            span: 16,
                        }}
                    >
                        <Button icon={<UserSwitchOutlined />} style={{width:"100%"}} type="primary" htmlType="submit" loading={loadings}>
                            {t('p3')}
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </Content>
        <Footer style={footerStyle}>{t('p4')}</Footer>
    </Layout>
}
export default Login;
export { getStaticPaths }
export const getStaticProps = async ctx => {
  // some data fetched from anywhere...
  const someOtherData = 'hello world'
  return {
    props: {
      ...(await getI18nProps(ctx, [
        'common',
      ])),
      someOtherData,
    },
  }
}