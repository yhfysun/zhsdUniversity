module.exports = {
  transpileDependencies: true,
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .tap(options => {
        options.compilerOptions = {
          compatConfig: {
            MODE: 2
          }
        }
        return options
      })
  }
}