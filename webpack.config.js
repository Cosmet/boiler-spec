const path = require('path');
const isDev = process.env.NODE_ENV === 'development';

module.exports = function(){

  return {
    mode: isDev ? 'development' : 'production',
    entry: './src/client/index.tsx',
    output: {
      path: __dirname,
      filename: `./src/public/bundle.js`,
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'awesome-typescript-loader',
          exclude: [
            'node_modules',
          ],
          include: [
            path.join(__dirname, '/src/')
          ]
        },
        {
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader'
        },
      ],
    },
  }
}
