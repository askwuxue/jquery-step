const config = {
  mode: 'production',
  // TODO 不能使用多入口打包进行库的编写，会导致无法正确解析
  // entry: {
  //   PageIntro: [path.join(__dirname, './src/index.js'), path.join(__dirname, './src/style.scss')],
  // },
  devtool: false,
}

module.exports = config
