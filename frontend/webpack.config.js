import HtmlWebpackPlugin from 'html-webpack-plugin'

export const plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
]
export const module = {
  rules: [
    {
      test: /.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
    },
    {
      test: /\.(ts|tsx)$/,
      exclude: /node_modules/,
      use: ['ts-loader'],
    },
  ],
}
export const resolve = {
  extensions: ['.tsx', '.ts', '.jsx', '.js'],
}
