// 多页面配置
const fs = require('fs');
const path = require('path');
const fileNames = fs.readdirSync(path.resolve(__dirname, './src/pages'));
const MutiPageConfig = {};

fileNames.forEach((pageName) => {
  MutiPageConfig[pageName] = {
    entry: `src/pages/${pageName}/${pageName}_main.js`,
    template: process.env.NODE_ENV === 'production' ? `src/pages/${pageName}/${pageName}.html` : `src/pages/${pageName}/${pageName}_development.html`,
    filename: process.env.NODE_ENV === 'production' ? `html/${pageName}.html` : `${pageName}.html`,
  }
});

module.exports = MutiPageConfig;