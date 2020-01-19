const path = require('path');

const resolve = dir => {
    return path.join(__dirname, dir)
};

module.exports = {
    // 如果你不需要使用eslint，把lintOnSave设为false即可
    lintOnSave: false,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set('@c', resolve('src/components'))
            .set('@v', resolve('src/views'))
    },
    // 设为false打包时不生成.map文件
    productionSourceMap: true,
    devServer: {
        proxy: {
            "/api": {
                target: 'http://localhost:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    }
};
