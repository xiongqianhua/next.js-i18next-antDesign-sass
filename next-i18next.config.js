module.exports = {
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'zh',
    locales: ['en','zh'],
  },
  react: { useSuspense: false }
}