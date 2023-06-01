const path = require('path');  //path モジュールの読み込み
 
module.exports = {
  entry: {
    app: './src/app.js',
    vendor: './src/vendor.js',
  },
  output: {
    filename: '[name].[contenthash].js', //エントリ名.ハッシュ.ten_file.js
  },
};

