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
}
