import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ReplacePlugin from 'replace-bundle-webpack-plugin';
import path from 'path';
import V8LazyParseWebpackPlugin from 'v8-lazy-parse-webpack-plugin';
const ENV = process.env.NODE_ENV || 'development';

const CSS_MAPS = ENV!=='production';

module.exports = {
	context: path.resolve(__dirname, "help"),
	entry: './index.js',

	output: {
		path: path.resolve(__dirname, "build/web"),
		publicPath: ENV === 'development' ? '/' : '/web/',
		filename: 'bundle.js'
	},

	resolve: {
		extensions: ['', '.jsx', '.js', '.json', '.less'],
		modulesDirectories: [
			path.resolve(__dirname, "help/lib"),
			path.resolve(__dirname, "node_modules"),
			'node_modules'
		],
		alias: {
			components: path.resolve(__dirname, "help/components"),    // used for tests
			style: path.resolve(__dirname, "help/style"),
			'react': 'preact-compat',
			'react-dom': 'preact-compat'
		}
	},

	module: {
		preLoaders: [
			{
				test: /\.jsx?$/,
				exclude: path.resolve(__dirname, 'help'),
				loader: 'source-map-loader'
			}
		],
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				// Transform our own .(less|css) files with PostCSS and CSS-modules
				test: /\.(less|css)$/,
				include: [path.resolve(__dirname, 'help/components')],
				loader: ExtractTextPlugin.extract('style?singleton', [
					`css-loader?modules&importLoaders=1&sourceMap=${CSS_MAPS}`,
					`postcss-loader`,
					`less-loader?sourceMap=${CSS_MAPS}`
				].join('!'))
			},
			{
				test: /\.(less|css)$/,
				exclude: [path.resolve(__dirname, 'help/components')],
				loader: ExtractTextPlugin.extract('style?singleton', [
					`css-loader?sourceMap=${CSS_MAPS}`,
					`postcss-loader`,
					`less-loader?sourceMap=${CSS_MAPS}`
				].join('!'))
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.(xml|html|txt|md)$/,
				loader: 'raw-loader'
			},
			{
				test: /\.(svg|woff2?|ttf|eot|jpe?g|png|gif)(\?.*)?$/i,
				loader: ENV==='production' ? 'file-loader' : 'url-loader'
			}
		]
	},

	postcss: () => [
		autoprefixer({ browsers: 'last 2 versions' })
	],

	plugins: ([
		new webpack.NoErrorsPlugin(),
		new ExtractTextPlugin('style.css', {
			allChunks: true,
			disable: ENV!=='production'
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(ENV)
		}),
		new HtmlWebpackPlugin({
			template: './index.ejs',
			minify: { collapseWhitespace: true }
		}),
		new CopyWebpackPlugin([
			{ from: './favicon.ico', to: './' },
			{ from: '../website', to: '../' }
		])
	]).concat(ENV==='production' ? [
		new V8LazyParseWebpackPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			output: {
				comments: false
			},
			compress: {
				warnings: false,
				conditionals: true,
				unused: true,
				comparisons: true,
				sequences: true,
				dead_code: true,
				evaluate: true,
				if_return: true,
				join_vars: true,
				negate_iife: false
			}
		}),

		// strip out babel-helper invariant checks
		new ReplacePlugin([{
			// this is actually the property name https://github.com/kimhou/replace-bundle-webpack-plugin/issues/1
			partten: /throw\s+(new\s+)?[a-zA-Z]+Error\s*\(/g,
			replacement: () => 'return;('
		}])
	] : []),

	stats: { colors: true },

	node: {
		global: true,
		process: false,
		Buffer: false,
		__filename: false,
		__dirname: false,
		setImmediate: false
	},

	devtool: ENV==='production' ? 'source-map' : 'cheap-module-eval-source-map',

	devServer: {
		port: process.env.PORT || 8080,
		host: 'localhost',
		colors: true,
		publicPath: '/',
		contentBase: './help',
		historyApiFallback: true,
		open: true,
		proxy: {
			// OPTIONAL: proxy configuration:
			// '/optional-prefix/**': { // path pattern to rewrite
			//   target: 'http://target-host.com',
			//   pathRewrite: path => path.replace(/^\/[^\/]+\//, '')   // strip first path segment
			// }
		}
	}
};
