import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const getLocaleProps = async ({ locale }) => ({
    props: {
      ...(await serverSideTranslations(locale, namespaces)),
    },
  })

export default getLocaleProps;
