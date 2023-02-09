const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: "development",
  devtool: 'eval-cheap-source-map',
  entry: {
    main: path.join(__dirname, '../src/main.ts'),
  },
  output: {
    library: {
      name: 'root-config',
      type: 'system',
    },
    asyncChunks: false,
    clean: true,
    filename: '[name].bundle.[contenthash].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    uniqueName: 'root-config',
    scriptType: false,
  },
  target: ['browserslist'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src/'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.cjs'],
  },
  externals: {
    'systemjs': 'http://localhost:3000/static/system.min.js'
  },
  stats: 'errors-warnings',
  module: {
    rules: [
      {
        test: /\.(cjs|ts|tsx|js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
          }
        ]
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            }
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
          }
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  optimization: {
    chunkIds: 'named',
    emitOnErrors: true,
    mergeDuplicateChunks: true,
    removeAvailableModules: true,
    removeEmptyChunks: false,
    runtimeChunk: {
      name: 'runtime',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'sso-web',
      template: path.join(__dirname, '../public/index.html'),
      favicon: path.join(__dirname, '../public/lighting.png'),
      inject: 'body',
      minify: false,
      cache: false,
    }),
    new webpack.BannerPlugin({
      banner: '天王盖地虎,小鸡炖蘑菇!'
    }),
  ],
  devServer: {
    compress: true,
    port: 'auto',
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    allowedHosts: 'all',
    client: {
      logging: 'verbose',
      overlay: {
        errors: true,
        warnings: false,
      },
      progress: true,
      reconnect: 10,
    },
    devMiddleware: {
      index: 'index.html'
    },
    hot: true,
    liveReload: true,
    historyApiFallback: true,
    open: true,
    setupExitSignals: true,
    proxy: {},
    static: {
      directory: path.join(__dirname, '../public'),
      publicPath: '/',
      watch: true,
    }
  },
};