const path = require('path')
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// TODO 为了使用speed-measure-webpack-plugin进行mini-css-extract-plugin 进行了降级处理
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const smp = new SpeedMeasurePlugin()
const devConfig = require('./webpack.config.dev')
const prodConfig = require('./webpack.config.prod')
// console.log('process.env.NODE_ENV=', process.env.NODE_ENV) // 打印环境变量

// 公共的webpack配置
const commonConfig = {
  entry: path.join(__dirname, './src/index.js'),
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'lib'),
    libraryExport: 'default',
    library: {
      name: 'PageIntro',
      type: 'umd',
    },
  },
  resolve: {
    // 配置别名
    alias: {
      '~': path.resolve('src'),
      '@': path.resolve('src'),
    },
  },
  devServer: {
    static: path.resolve(__dirname, 'public'), // 静态文件目录
    compress: true, //是否启动压缩 gzip
    port: 8080, // 端口号
    open: true, // 是否自动打开浏览器
  },
  externals: {
    jquery: 'jQuery',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
  ],
}

module.exports = () => {
  if (process.env.NODE_ENV === 'dev') {
    return smp.wrap(merge(commonConfig, devConfig))
  }
  if (process.env.NODE_ENV === 'prod') {
    return smp.wrap(merge(commonConfig, prodConfig))
  }
}
