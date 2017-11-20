import express from 'express'
const app = express();

app.use('/', (req, res, next) => {
	console.log(req);
	next();
});

app.use('/greeting', (req, res) => {
	res.json({
		message: 'Hello'
	});
});

app.listen(3000);
