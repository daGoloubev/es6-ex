import express from 'express';
import bodyParser from 'body-parser';
import bunyan from 'bunyan';
import expressLog from 'express-bunyan-logger';

const APP = express();
const LOG = bunyan.createLogger({name: 'server'});
const ROUTER = express.Router();
const PORT = process.env.PORT || 8000;

APP.use(expressLog());
APP.use(expressLog.errorLogger());

APP.use(bodyParser.urlencoded({extended: false}));
APP.use(bodyParser.json());


APP.use('/greeting', (req, res) => {
	if(req.query.name) {
		res.json({
			message: `Hello ${req.query.name}`
		});
	} else {
		res.status(400).send({
			message: 'What is your name?'
		});
	}
});

APP.use('/', ROUTER);

APP.listen(PORT);
LOG.info(`Express server listening at port ${PORT}`);

