import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
	mode: 'production',
	entry: [
		path.resolve(__dirname, 'src/index')
	],
	target: 'web',
	output: {
		filename: 'bundle.js',
		publicPath: '/',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: true,
			minify: {
				minifyCSS: true,
				minifyJS: true,
				minifyURLs: true,
				removeComments: true,
				removeRedundantAttributes: true,
				removeEmptyAttributes: true,
				keepClosingSlash: true,
				collapseWhitespace: true,
				conservativeCollapse: true,
			}
		})
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test:  /\.css$/,
				use: [
					{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					}
				]
			}
		]
	}
};