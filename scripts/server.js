import express from 'express';
import opn from 'opn';
import path from 'path';
import webpack from 'webpack';

import config from '../webpack.config.dev';

const port = 3030;
const app = express();
const compiler = webpack(config);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, err => {
    if (err) {
        console.error(err);
    } else {
        opn('http://localhost:' + port);
    }
});