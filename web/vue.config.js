module.exports = {
  assetsDir: './static',
  publicPath: './',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/static'
        }
      }
    }
  }
};
