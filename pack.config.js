const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/main.tsx',
    output: {
        path: `${__dirname}/dist`,
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.tsx', '.js'],
    },
    module: {
        rules: [
          {
            test: /\.tsx$/i,
            include: path.resolve(__dirname, './src'),
            loader: "ts-loader",
            options: {
                transpileOnly: true
            }
          }
        ],
    }
}