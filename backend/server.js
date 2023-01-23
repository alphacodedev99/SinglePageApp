const express = require('express');
const cors = require('cors');
let lolChampions = require('lol-champions');

const app = express();

app.use(cors());

app.get('/', (req, res) => {
	res.send(lolChampions);
});

app.listen(8800, () => {
	console.log('RADI SRW');
});
