const path = require('path')

module.exports = {
  mode: "development",
  entry: [
    './src/js/main.js',
    './src/sass/styles.scss',
  ],
  output: {
    filename: 'main-compilado.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    static: path.resolve(__dirname, './')
  },
  module: {
    rules: [
        {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'file-loader',
                    options: { outputPath: 'css/', name: 'app.css'}
                },
                'sass-loader'
            ]
        }
    ]
  }
}