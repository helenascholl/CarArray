const Car = require('./car');

function CarArray() {
    this.cars = [];

    this.push = function (... cars) {
        for (let car of cars) {
            if (car instanceof Car) {
                this.cars[this.cars.length] = car;
            }
        }
    };

    this.getCar = function (licencePlate) {
        for (let car of this.cars) {
            if (car.licencePlate == licencePlate) {
                return car;
            }
        }
    };
}

module.exports = CarArray;