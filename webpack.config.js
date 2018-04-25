const path = require('path');
const isDev = process.env.NODE_ENV === 'development';

module.exports = function(env = { target: 'web' }){

  return {
    mode: isDev ? 'development' : 'production',
    entry: './src/client/index.tsx',
    output: {
      path: __dirname,
      filename: `./dist/public/bundle.js`,
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    target: env.target,
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

// const path = require('path');
// const isDev = process.env.NODE_ENV === 'development';

// module.exports = function(env = {target: 'web'}){
//   const isWeb = env.target === 'web'
//   const __dir = isWeb ? 'client': 'server';
//   const __outDir = isWeb ? 'public' : 'server';
//   const __extension = isWeb ? 'tsx': 'ts';
//   const __externals = isWeb
//     ? {
//         'react': 'React',
//         'react-dom': 'ReactDOM'
//       }
//     : {};

//   return {
//     mode: isDev ? 'development' : 'production',
//     entry: `./src/${__dir}/index.${__extension}`,
//     output: {
//       path: __dirname,
//       filename: `./dist/${__outDir}/bundle.js`,
//     },
//     devtool: 'source-map',
//     resolve: {
//       extensions: ['.ts', '.tsx', '.js', '.jsx'],
//     },
//     target: env.target,
//     module: {
//       rules: [
//         {
//           test: /\.tsx?$/,
//           use: 'awesome-typescript-loader',
//           exclude: [
//             'node_modules',
//           ],
//           include: [
//             path.join(__dirname, '/src/')
//           ]
//         },
//         {
//           enforce: 'pre',
//           test: /\.js$/,
//           loader: 'source-map-loader'
//         },
//       ],
//     },

//     externals: __externals
//   }
// }
