import path from 'path';
import webpack from 'webpack';

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    entry: [
        
        'webpack-hot-middleware/client?reload=true',
        path.join(__dirname,'/client/index.js')
    ],
    output: {
        filename: 'bundle.js',
        path: '/',
        publicPath: '/'
    },
    plugins: [
        // OccurenceOrderPlugin is needed for webpack 1.x only
        //ynew webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        // Use NoErrorsPlugin for webpack 1.x
        new webpack.NoEmitOnErrorsPlugin()
    ],
    module: {
        rules: [
          {
            test: /\.js$/,
            include: [
                 path.join(__dirname,'client'),
                 path.join(__dirname, 'server/shared')
            ],
           // use: {
              loader: ['babel-loader']
              
           // }
          }
        ]
      },
      resolve: {
          extensions: ['.js']
      }
}