// const path = require("path");
// const UglifyPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "" : "./", // 基本路径
  outputDir: process.env.NODE_ENV === "production" ? "dist" : "devdist", // 输出文件目录
  lintOnSave: true, // eslint-loader 是否在保存的时候检查
  // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  // webpack配置
  chainWebpack: () => {},
  configureWebpack: () => {},
  productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
  // css相关配置
  css: {
    extract: true, // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: false, // 开启 CSS source maps?
    loaderOptions: {
      sass: {
        prependData: `@import "./src/styles/main.scss";`
      }
    }, // css预设器配置项
    modules: false // 启用 CSS modules for all css / pre-processor files.
  },
  parallel: require("os").cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
  pwa: {}, // PWA 插件相关配置 see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  // webpack-dev-server 相关配置
  devServer: {
    host: "0.0.0.0",
    port: 8080,
    https: false,
    hot: true,
    hotOnly: false,
    open: true, //配置自动启动浏览器
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: null // 代理转发配置，用于调试环境
  },
  // 第三方插件配置
  pluginOptions: {}
};
