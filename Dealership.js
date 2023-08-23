const Car = require("./Car");

const Dealership = function (name, maxNumberOfCars){
    this.name = name;
    this.maxNumberOfCars = maxNumberOfCars;
    this.carsInStock = [];
    
}



Dealership.prototype.getName = function (){ return this.name };
Dealership.prototype.getMaxNumberOfCars = function () {return this.maxNumberOfCars};
Dealership.prototype.getCarsInStock = function () {return this.carsInStock};

module.exports = Dealership;
