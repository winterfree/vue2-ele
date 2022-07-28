module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://elm.cangdu.org',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
