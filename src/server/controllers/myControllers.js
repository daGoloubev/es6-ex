import Users from '../db/helper';
const USERS = new Users();

export default class MyController {
	users(req, res) {
		res.json({
			users: USERS.getUsers()
		});
	}
	names(req, res) {
		res.json({
			users: USERS.getNames()
		});
	}
	average(req, res) {
		res.json({
			age: USERS.getAverageAge()
		});
	}
	oldest(req, res){
		res.json({
			age: USERS.getOldest()
		});
	}
	youngest(req, res){
		res.json({
			age. USERS.getYoungest()
		});
	}
	findByOccupation(req, res){
		res.json({
			user: USERS.findByOccupation(req.occupation)
		});
	}
	findByGender(req, res){
		res.json({
			user: USERS.findByGender(req,query.gender || req.body.gender)
		});
	}
}
