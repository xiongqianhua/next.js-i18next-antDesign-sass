import { useState, useEffect } from 'react'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import i18nextConfig from '@/next-i18next.config';

const SwitchBox = () => {
  const [selected, setSelected] = useState({})
  const [languages, setLanguages] = useState([]);
  const router = useRouter()
  const { t } = useTranslation('footer')
  const { locale } = router.query;
  // 异步加载语言配置
  const fetchLanguages = async () => {
    const response = await fetch('/languages.json');
    const data = await response.json();
    setLanguages(data.languages);

    if (locale) {
      setSelected(data.languages.find(item => item.code === locale))
    } else {
      setSelected(data.languages[0])
    }
  };
  useEffect(() => {
    fetchLanguages();
  }, []);
  useEffect(() => {
    let pName = router.pathname
    const link = returnHref(router, selected.code)
    selected.code && router.push(link)

  }, [selected])
  const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale

  return (<Dropdown
    menu={{
      languages,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        {selected}
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>)
};
export default SwitchBox;