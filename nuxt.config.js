const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
  ** Subfolder configuration
  */

  router: {
    base: '/itunes/'
  },

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'zh-Hant'
    },
    title: 'iTunes Artwork Finder by coder-ysj',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content:
          '提取高清 iTunes 音乐专辑封面、电影海报、App Store 应用图标及截图'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/itunes/icon.png' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {
    color: 'rgb(156, 114, 248)',
    height: '5px'
  },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [{ src: '~plugins/ga.js', ssr: false }],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {}
  }
}
