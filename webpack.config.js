const path = require('path');  //path モジュールの読み込み
 
module.exports = {
  entry: ['./src/t1.js', './src/t2.js'],
  output: {
    filename: 'bundle.js',  //bundle.js にまとめて出力
  },
};

