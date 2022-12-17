import { join } from 'path'
import { merge } from 'webpack-merge'
import webpackConfig from './webpack.config'

export default merge(webpackConfig, {
  mode: 'production',
  output: {
    path: join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
})
