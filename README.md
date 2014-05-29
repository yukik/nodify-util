nodify-util (v0.1.0)
===========

client side node util

クライアントサイドでサーバサイドのutilを同様に使用するためのライブラリです。  
現在は`util.inherits`のみ実装されています

# usage

[RequireJS](http://requirejs.org)と[grunt-m2r](https://www.npmjs.org/package/grunt-m2r)によりクライアントサイドとサーバサイドで同じコードを記述することができます。  

まずはNodeの記法に基づいてコーディングしてください。  
その後、grunt-m2rを動作させる事で、RequireJSで動作するコードに変換されます。  

`util.js`をファイル名を変更せずにそのまま、RequireJSのconfigで設定した`baseUrl`のフォルダに配置してください

これにより`var util = require('util');`がクライアントでも同様に記述する事が出来ます。

# feature

 + inherits(constructor, superConstructor)

`inherits`以外は実装されていません。
