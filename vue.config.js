// const MutiPageConfig = require('./MultiPage.config');
// console.log(MutiPageConfig);
const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  chainWebpack: (config)=>{
      config.resolve.alias
          .set('@', resolve('src'))
          .set('assets',resolve('src/assets'))
          .set('components',resolve('src/components'))
          .set('view',resolve('src/view'))
  },
  css: {
      loaderOptions: {
          css: {},
          postcss: {
            // plugins: [
            //     require('postcss-px2rem')({
            //         remUnit: 375
            //     })
            // ]
          }
      }
  },

  // 自动遍历并注册pages
  // pages: MutiPageConfig,

  // filenameHashing: false, // 去除哈希值

  // indexPath: process.env.NODE_ENV === 'production' ? 'html/index.html' : 'index.html',

  // outputDir: 'em' // 输出路径
}