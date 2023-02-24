const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    // {
    // main: './index.js',
    // test: './test.js',
    // admin: './admin.js',
    // },
    output: {
        // filename: './js/[name].js',
        // path: path.resolve(__dirname, 'dist')
        filename: './js/main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        hot: true,
        static: {
            directory: './dist',
            watch: true
        }
    }
};