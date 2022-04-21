const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: process.env.NODE_ENV === 'production'
        ? 'https://oleinikovapolina.github.io/task-tracking-for-FTML/dist/'
        : '/',
    transpileDependencies: ['vuetify'],
    pwa: {
        name: 'Task tracking',
        themeColor: '#323a83',
        msTileColor: '#fff',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: '#323a83',
        manifestOptions: {
            start_url: './',
            scope: '.',
            background_color: '#fff'
        }
    }
})
