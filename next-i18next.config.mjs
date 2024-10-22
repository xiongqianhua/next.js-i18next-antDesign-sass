/**
 * @type {import('next-i18next').UserConfig}
 */
// import path from "path";

export default {
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh','en', 'fr'],
  },
  // localePath: typeof window === 'undefined' ? path.resolve('./public/locales') : '/locales',
  // ns: ['common','header','footer'],
  // reloadOnPrerender: process.env.NODE_ENV === 'development',
}
