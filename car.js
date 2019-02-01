function Car(licencePlate, brand, model, color) {
    this.licencePlate = licencePlate;
    this.brand = brand;
    this.model = model;
    this.color = color;

    this.toString = function () {
        return `Car:
licence plate: ${this.licencePlate}
brand: ${this.brand}
model: ${this.model}
color: ${this.color}`;
    }
}

module.exports = Car;