# vueworks

> vueworks

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# 有关IView
npm install --save iview
npm install --save vue-router
npm install --save-dev css-loader
npm install --save-dev style-loader
npm install --save-dev less less-loader
npm install --save-dev url-loader

对应的在webpack.config.js配置：

{
  test: /iview.src.*?js$/,
  loader: 'babel-loader'
},
{
test: /\.js$/,
loader: 'babel-loader',
exclude: /node_modules/
},
{ test: /\.css$/, loader: "style-loader!css-loader" },
{ test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
{ test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },

npm install iview-loader --save-dev

module: {
    rules: [
      {
            test: /\.vue$/,
            use: [
                {
                    loader: 'vue-loader',
                    options: {

                    }
                },
                {
                    loader: 'iview-loader',
                    options: {
                        prefix: false
                    }
                }
            ]
        },
      {
          test: /iview.src.*?js$/,
          loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
}

```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
