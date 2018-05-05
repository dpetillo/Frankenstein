const path = require('path')
const webpack = require('webpack')

module.exports = {
  target: 'web',
  cache: false,
  context: __dirname,
  devtool: false,
  entry: {
    //admin: './apps/admin',
    main: './apps/main',
    //login: './apps/login'
  },
  output: {
    path: path.resolve('./wwwroot/js'),
    filename: '[name].bundle.[hash].js',
    chunkFilename: '[name].[id].js',
    publicPath: '/js/'
  },
  plugins: [
    new webpack.DefinePlugin({'process.env': {
      NODE_ENV: `"${process.env.NODE_ENV}"`,
      API_URL: `"${process.env.API_URL}"`,
      API_URL_OLD: `"${process.env.API_URL_OLD}"`,
      INTERCOM_APP_ID: `"${process.env.INTERCOM_APP_ID}"`
    }}),
    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin()
    
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: { warnings: false },
    //   mangle: { keep_fnames: true }
    // })
  ],
  module: {
    loaders: [
      {include: /\.json$/, loaders: ['json']},
      {include: /\.js$/, loaders: ['babel', 'lodash'], exclude: /(node_modules)/},
      {include: /\.jsx$/, loaders: ['babel', 'lodash', 'react-prefix', 'strip-loader?strip[]=console.log'], exclude: /(node_modules)/}
    ]
  },
  resolveLoader: {
    root: path.resolve('./node_modules')
  },
  resolve: {
    extensions: ['', '.json', '.js', '.jsx']
  },
  node: {
    __dirname: true,
    fs: 'empty'
  }
}
