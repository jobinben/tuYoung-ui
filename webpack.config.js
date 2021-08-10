
const path = require('path')

const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports={
    mode: 'development', // 提供 mode 配置选项，告知 webpack 使用相应环境的内置优化
    entry: './src/app.js', // 入口文件
    output: { // 出口文件
        path: path.join(__dirname, 'dist'), // 输出的目录
        filename: 'bundle.js' // 输出后的文件名
    },

    // 配置插件
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: 'index.html'
        }),
        
    ],

    module: { // 配置所有 第三方模块 加载器

        // 所有 第三方模块 匹配规则
        rules: [
            // use属性下的数组调用第三方的 加载器顺序是 从右到左。
            {test: /\.css$/, use: ['style-loader', 'css-loader']}, // 第一个参数是匹配的正则表达式, 配置加载 .css文件
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']}, // 配置加载 .less文件

            // 配置转换js文件的babel
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}, // 排除node_modules里面的js文件编译

            // 配置Vue
            {test: /\.vue$/, use: 'vue-loader'},
        ]

    },

    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js' // 用 webpack 1 时需用 'vue/dist/vue.common.js'
        }
      }
    
}