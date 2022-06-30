import { defaultTheme, defineUserConfig  } from 'vuepress'
import { sidebar } from './router'

export default defineUserConfig({
  base : "/cypress-e2e-framework-doc/",
  lang: 'es-ES',
  // title : 'Tsoft',
  description: 'Documentacion de cypress framework e2e Tsoft',
  port: 8081,
  open: false,
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  theme: defaultTheme({
    logo: '/images/logo-texto.png',
    sidebar: sidebar,
  }),
  dest : "docs",
})