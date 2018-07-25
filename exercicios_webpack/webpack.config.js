const webpack = require('webpack')

//OBJETO QUE REPRESENTA TODA CONFIGURAÇÃO
//QUE QUEREMOS NA APLICAÇÃO
//FAZER TRANSPILE JAVASCRIPT, REACT, IRÁ ESTAR AQUI
//É NECESSÁRIO CRIAR O DIRETÓRIO ex PARA COLOCAR O ARQUIVO index.js
module.exports = {
    entry : './ex/index.js',
    output : {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    module: {
        loaders: [{
            test: /.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        }]
    }
}