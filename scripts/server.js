import express from 'express';
import opn from 'opn';
import path from 'path';
import webpack from 'webpack';
import chalk from 'chalk';

import config from '../webpack.config.dev';

const port = 3030;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath,
}));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, err => {
	if (err) {
		console.error(err);
	} else {
		console.log(chalk.blue('Development environment is running at:'));
		console.log(chalk.green('http://localhost:' + port));
		opn('http://localhost:' + port);
	}
});