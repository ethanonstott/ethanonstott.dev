const express = require(`express`);
const path = require(`path`);
const app = express();

app.use('/static', express.static(__dirname + '/static'));

app.get('/', (req, res) =>{
	res.sendFile(path.join(__dirname, '/views/index.html'))
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}...`);
});
