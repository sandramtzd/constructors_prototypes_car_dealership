const Car = require("./Car");
const Dealership = require ("./Dealership");

const car1 = new Car("Toyota", 1500, "Diesel");
console.log(car1);

const dealership1 = new Dealership("Kintore Garage", 15, car1)