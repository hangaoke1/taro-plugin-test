const { UnifiedWebpackPluginV5 } = require('weapp-tailwindcss/webpack')
const path = require('path')

const config = {
  projectName: 'qiyu-taro',
  date: '2024-07-25',
  designWidth: 375,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
    375: 2 / 1,
  },
  sourceRoot: 'src',
  outputRoot: 'miniprogram',
  plugins: [],
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'preact',
  compiler: {
    type: 'webpack5',
    prebundle: { enable: false },
  },
  cache: {
    enable: false // Webpack 持久化缓存配置，建议开启。默认配置请参考：https://docs.taro.zone/docs/config-detail#cache
  },
  defineConstants: {
  },
  alias: {
    '@': path.resolve(__dirname, '..', 'src/plugin'),
  },
  mini: {
    webpackChain (chain, webpack) {
      chain.merge({
        plugin: {
          install: {
            plugin: UnifiedWebpackPluginV5,
            args: [{
              appType: 'taro',
              rem2rpx: true
            }]
          }
        }
      })
      if (process.env.ANALYZE) {
        chain.plugin('analyzer')
        .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin, [])
      }
    },
    postcss: {
      autoprefixer: {
        enable: true,
        config: {

        }
      },
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 10240 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
