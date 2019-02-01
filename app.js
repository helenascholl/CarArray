const Car = require('./car');
const CarArray = require('./carArray');

const cars = new CarArray();

const c1 = new Car('L-1234', 'BMW', '13', 'blue');
const c2 = new Car('PE-5678', 'Mazda', '5', 'grey');

cars.push('a', 'b', c1, c2, 'x');

const c3 = cars.getCar('PE-5678');
console.log(c3.toString());