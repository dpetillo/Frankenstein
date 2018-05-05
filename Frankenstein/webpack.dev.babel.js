const webpack = require('webpack')
const config = require('./webpack.prod.babel.js')
const DashboardPlugin = require('webpack-dashboard/plugin')

config.cache = true
// config.debug = true
config.devtool = 'source-map'

for (let key in config.entry) {
  config.entry[key] = [ 'eventsource-polyfill', 'webpack-hot-middleware/client', config.entry[key]]
}

//DBP: override production setting to use a hash
config.output.filename = '[name].bundle.js'

config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({'process.env': {
    NODE_ENV: `"${process.env.NODE_ENV}"`,
    API_URL: `"${process.env.API_URL}"`,
    API_URL_OLD: `"${process.env.API_URL_OLD}"`,
    INTERCOM_APP_ID: `"${process.env.INTERCOM_APP_ID}"`
  }}),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new DashboardPlugin()
]

config.module.loaders = [
  {include: /\.json$/, loaders: ['json']},
  {include: /\.js$/, loaders: ['babel'], exclude: /(node_modules)/},
  {include: /\.jsx$/, loaders: ['react-hot', 'babel', 'react-prefix'], exclude: /(node_modules)/},
  {include: /\.css$/, loaders: ['style', 'css']}
]


config.devServer = {
  publicPath: config.output.publicPath,
  // contentBase: './public',
  hot: true,
  inline: true,
  lazy: false,
  quiet: false,
  noInfo: true,
  historyApiFallback: true,
  headers: {'Access-Control-Allow-Origin': '*'},
  stats: {colors: true}
}

module.exports = config
// export default config
