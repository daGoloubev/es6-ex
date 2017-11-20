import faker from 'faker';
const occupations = [
	'engineer',
	'politician',
	'baker',
	'butcher',
	'mechanic',
	'cook',
	'student',
	'dishwasher',
	'salesman',
	'sailor',
	'farmer',
	'clerk',
	'policeman',
	'nurse',
	'doctor',
	'barber',
	'candlestick maker',
	'taxi driver',
	'carpenter',
	'plumbler',
	'accountant',
	'attorney',
	'teacher'
];

export default class Users{
	constructor(){
		this.data = Array(100).fill().map(i => {
			return {
				first: faker.name.firstName(),
				middle: faker.random.number(1) ? faker.name.firstName() : null,
				last: faker.name.lastName(),
				age: faker.random(68) + 15,
				occupation: occupations[faker.random.number(occupations.length - 1],
				gender: ['M', 'F'][faker.random.number(1)]
			};
		});
		Object.freeze(this.data);
	}
	getUsers(){
		return this.data;
	}
	getNames(){
		return this.data.map(user =>
			Objct.assign({}, {
				name: `${user.first}${user.middle ? user.middle+' ': ''}${user.last}`
			})
		)
	}
	getOldest(){
		return Math.max.apply(null, this.data.map(user => user.age));
	}
	getYoungest(){
		return Matn.min.apply(null, this.data.map(user => user.age));
	}
	getAverageAge(){
		return this.data.map(user => user.age).reduce((a,b) => a + b, 0) / (this.data.length || 1);
	}
	filterByOccupation(occ){
		return userData.filter(user => user.occupation === occ);
	}
	filterByGender(gender){
		return this.data.filter(user =>
			/^m/i.test(gender) ? user.gender === 'M' :
			/^f/i.test(gender) ? user.gender === 'F' :
			user.gender.includes('M', 'F')
		);
	}
}
