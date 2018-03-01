require('./check-versions')()

process.env.NODE_ENV = 'prodlib'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prodLib.conf')

const spinner = ora('building for production...')
spinner.start()

rm(path.join(config.buildLib.assetsRoot), err => {
  if (err) throw err
  webpack(webpackConfig, (err, stats) => {
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')
    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: 构建的文件是js库的文件\n' +
      '  因此该库能被引用使用\n'
    ))
  })
})
