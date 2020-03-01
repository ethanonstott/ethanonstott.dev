const express = require(`express`);
const path = require(`path`);
const rateLimiter = require('express-rate-limit');
const app = express();

// allow 20 requests per minute
var limiter = new rateLimiter({
	windowMs: 60000,
	max: 20
});

app.use('/static', express.static(__dirname + '/static'));
app.use(limiter);

app.get('/', (req, res) =>{
	res.sendFile(path.join(__dirname, '/views/index.html'));
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}...`);
});
