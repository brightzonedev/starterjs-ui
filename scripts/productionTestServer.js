import express from 'express';
import opn from 'opn';
import path from 'path';
import chalk from 'chalk';
import compression from 'compression';


const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(port, err => {
	if (err) {
		console.error(err);
	} else {
		console.log(chalk.blue('Built version is running at:'));
		console.log(chalk.green('http://localhost:' + port));
		opn('http://localhost:' + port);
	}
});