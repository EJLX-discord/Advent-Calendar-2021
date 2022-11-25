export default (config) => {
  config.output.publicPath = './'
  config.module.rules.push({
    test: /\.mp3$/,
    loader: ['file-loader']
  })
  config.resolve.extensions.push('.mp3')
}
