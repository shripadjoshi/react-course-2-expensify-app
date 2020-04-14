
const path = require('path');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV  === 'test') {
    require('dotenv').config({path: '.env.test'});
} else if (process.env.NODE_ENV  === 'development') {
    require('dotenv').config({path: '.env.development'});
}

module.exports = (env) => {
    const isProduction = env === 'production';

    return {
        mode: 'development',
        entry: './src/app.js',
        output: {
            path: path.join(__dirname, 'public', '/dist'),
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.s?css$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
        },
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, '/public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        } 
    }
};