import { merge } from 'webpack-merge'
import webpackConfig from './webpack.config'

export default merge(webpackConfig, {
  mode: 'development',
  entry: './src/index.tsx',
})
