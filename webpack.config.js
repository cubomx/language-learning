// This is part of node
const path = require('path');
 
// Change HTML from places
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = {
    // point of entry of our app
    entry: './src/index.js',
    // before compiling
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    
    resolve: {
        // .mjs --> modules
        extensions: ['*', '.mjs', '.js', '.svelte']
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.svelte$/,
                exclude: /node_modules/,
                use: {
                    loader: 'svelte-loader'
                }
            },
            {
                test: /\.(png|gif|jpg|jpeg)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: { 
                        name: 'assets/[hash].[ext]' 
                      },
                  }
                ],
              },             
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            template: './public/index.html',
            filename: './index.html'
        }
           
        )
    ]
}
