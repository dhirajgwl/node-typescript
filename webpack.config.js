const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports ={
    entry:"./app/src/index.tsx",    
    devtool: "source-map",    
    resolve: {
        extensions: [".ts", ".tsx",".js",".jsx",".json"]
    },
    module:{
        rules: [{
            test: /\.ts|\.tsx|.jsx$/,
            use:"awesome-typescript-loader",
            exclude: /node_modules/,
        },
        {
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader"
        },
        {
            test: /\.s[ac]ss$/i,
            use: ['style-loader', 'css-loader','sass-loader',],
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use:['file-loader',]
        }
    ]
    },
    output:{
        filename:'build.js',
        path:path.resolve(__dirname, 'dist')
    },
    plugins: [new HtmlWebpackPlugin(
        {
            template:"./app/public/index.html",
            title:"Santa App"
        }
    )],
    stats: {
        colors: true
    },

}