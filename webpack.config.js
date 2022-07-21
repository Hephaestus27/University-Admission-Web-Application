const HtmlWebPackPluging = require('html-webpack-plugin');

module.exports = {

    entry: './src/main.ts',
    resolve: {
        extensions : ['.ts','.js']
    },

    module : {
        rules: [
            {
            test : /\.ts$/,
            use:['ts-loader','angular2-template-loader']
        },
        {
            test : /\.(html|css)$/,
            use:['raw-loader']
        }
    ]
},
plugins:[
    new HtmlWebPackPluging({template:'src/index.html'})
],
devServer:{
    
    historyApiFallback : true
}

}