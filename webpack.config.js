const path = require('path');  //path モジュールの読み込み
 
module.exports = {
  entry: {
    app: './src/app.js',
    vendor: './src/vendor.js',
  },
  output: {
    filename: '[name].js',  //app.js、vendor.js が出力される
  },
};

