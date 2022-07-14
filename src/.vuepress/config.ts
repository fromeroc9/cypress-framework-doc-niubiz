import { defaultTheme, defineUserConfig } from 'vuepress'
import { sidebar } from './router'
const { searchPlugin } = require('@vuepress/plugin-search')

export default defineUserConfig({
  base: "/cypress-framework-doc/",
  lang: 'es-ES',
  title: 'Cypress',
  description: 'Documentación de Cypress Framework E2E TSOFT',
  // port: 8081,
  open: false,
  head: [['link', { rel: 'icon', href: 'images/logo.png' }]],
  theme: defaultTheme({
    logo: '/images/logo-texto.png',
    sidebar: sidebar,
    logoDark: '/images/logo_white.png',
    colorMode: 'light'
  }),
  dest: "docs",
  plugins: [
    searchPlugin({
      '/': {
        placeholder: 'Buscar',
        isSearchable: (page) => page.path !== '/guide',
      }
    }),
  ],
})