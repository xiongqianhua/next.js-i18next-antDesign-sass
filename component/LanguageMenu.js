import React,{ useEffect, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useRouter } from 'next/router';
import i18nextConfig from '@/next-i18next.config';
import { returnHref } from '@/lib/tool';

const LanguageMenu = () => {
    const router = useRouter()
    const [language, setLanguage] = useState(router.query.locale || i18nextConfig.i18n.defaultLocale)
    const handleOpenChange = (e)=>{
        setLanguage(e.key)
        const locale = e.key
        let href = router.asPath
        href = router.pathname.replace('[locale]', locale)
        router.push(href)
    }
    const items = i18nextConfig.i18n.locales.map(item=> {
        return  {
              key: item,
              label: item,
          }
    })

    useEffect(() => {
      const link = returnHref(router, language)
      language && router.push(link)
    }, [language])

    return (
        <Dropdown
          menu={{
            items,
            onClick: handleOpenChange,
          }}
        >
         <Space>
              {language}
              <DownOutlined />
         </Space>
        </Dropdown>
      )
};
export default LanguageMenu;