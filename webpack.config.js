const path = require('path');
module.exports = {
	mode: 'development',
	entry: './src/RedGPU.ts',
	devtool: 'source-map', // Add this line for source maps
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
			{
				test: /\.wgsl$/i,
				use: 'raw-loader',
			},
		],
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	experiments: {
		outputModule: true,
	},
	output: {
		clean: true,
		library: {
			type: 'module',
		},
		filename: 'RedGPU.mjs',
		path: path.resolve(__dirname, 'dist'),
	},
	plugins: []
};