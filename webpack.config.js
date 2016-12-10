module.exports = {
    entry: './app/app.js',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    module: {
        loaders:[
            {
                loader: 'babel-loader',
                query: {
                    presets: [
                        'react',
                        'es2015'
                    ]
                },
                // Kiểm tra định dạng
                test: /\.jsx?$/,
                // Không dịch node_module
                exclude: /node_modules/
            }
        ]
    }
}