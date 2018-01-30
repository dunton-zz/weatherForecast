module.exports = {
  devtool: 'source-map',
  debug: true,
  entry: [
    './src/index.js', './src/actions/index.js', './src/components/app.js', './src/components/chart.js', './src/components/google_map.js', './src/containers/search_bar.js', './src/containers/weather_list.js', './src/reducers/index.js', './src/reducers/reducer_weather.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
