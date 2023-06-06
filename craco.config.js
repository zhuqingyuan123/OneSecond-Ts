const path = require('path');

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        changeOrigin: true,
        target: 'http://api.cc0820.top:8888',
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: path.resolve(__dirname, '../src/assets/svgs'), // 处理指定svg的文件
        options: {
          symbolId: 'icon-[name]'
        }
      }
    ]
  }
};
