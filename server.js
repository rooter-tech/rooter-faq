const express = require('express');
const compress = require('compression');
const forceDomain = require('forcedomain');
const app = express();
const port = process.env.PORT || 8080;

// Apply gzip compression
app.use(compress());
app.use(forceDomain({
	hostname: 'www.rooter.io',
	protocol: 'https'
}));
app.use(express.static('build'));
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/build/index.html');
});
app.get('/web/*', (req, res) => {
	res.sendFile(__dirname + '/build/web/index.html');
});
app.listen(port, (err) => {
	if (err) {
		console.log('Error in firing up the server !');
	}
	console.log(`Server started at ${port}...`);
});

