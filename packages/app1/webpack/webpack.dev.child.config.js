const path = require("path");
const webpack = require('webpack');

module.exports = {
  mode: "development",
  devtool: false,
  entry: {
    main: path.join(__dirname, '../src/main.tsx')
  },
  output: {
    // iife: true,
    // library: {
    //   name: 'app1',
    //   type: 'umd',
    //   umdNamedDefine: false,
    // },
    library: {
      name: 'app1',
      type: 'system'
    },
    uniqueName: 'app1',
    asyncChunks: false,
    clean: true,
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    scriptType: false
  },
  target: ['browserslist'],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src/'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.cjs'],
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
  // optimization: {
  //   chunkIds: 'named',
  //   emitOnErrors: true,
  //   mergeDuplicateChunks: true,
  //   removeAvailableModules: true,
  //   removeEmptyChunks: false,
  //   runtimeChunk: {
  //     name: 'runtime',
  //   },
  // },
  plugins: [
    new webpack.BannerPlugin({
      banner: '11111天王盖地虎,小鸡炖蘑菇!1111'
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
    setupExitSignals: true,
    proxy: {},
    static: {
      directory: path.join(__dirname, '../dist'),
      publicPath: '/',
      watch: false,
    }
  },
};