const express = require('express');
let lolChampions = require('lol-champions');
console.log('====================================');
console.log(lolChampions);
console.log('====================================');

const app = express();

app.get('/', (req, res) => {
	res.send(lolChampions);
});

app.listen(8800, () => {
	console.log('====================================');
	console.log('RADI SRW');
	console.log('====================================');
});
