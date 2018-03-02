/* eslint-disable no-console */
import webpack from 'webpack';
import config from '../webpack.config.prod';
import chalk from 'chalk';

process.env.NODE_ENV = 'production';

console.log(chalk.blueBright('Production build is running...'));

const compiler = webpack(config);

compiler.run((err, stats) => {
	if (err) {
		console.error(err.stack || err);
		if (err.details) {
			console.error(err.details);
		}
		return;
	}
   
	const info = stats.toJson();
    
    
	if (stats.hasErrors()) {
		console.error(info.errors);
	}
    
	if (stats.hasWarnings()) {
		console.warn(info.warnings);
	}
    
	console.log(chalk.green('Production build was successful!'));
});