const Car = require("./Car");

const Dealership = function (dealershipName, maxNumberOfCars){
    this.dealershipName = dealershipName;
    this.maxNumberOfCars = maxNumberOfCars;
    this.carsInStock = [];
    
}

Dealership.prototype.addCar = function (car) {
    this.carsInStock.push(car);
}



Dealership.prototype.countCarsInStock = function(){
    this.carsInStock.length;
    
}

Dealership.prototype.manufacturerCars = function(){
    this.carsInStock.find();
}

Dealership.prototype.getDealershipName = function (){ return this.dealershipName };
Dealership.prototype.getMaxNumberOfCars = function () {return this.maxNumberOfCars};
Dealership.prototype.getCarsInStock = function () {return this.carsInStock};

Dealership.prototype.setDealershipName = function (newDealershipName) {
    this.dealershipName = newDealershipName;
}

Dealership.prototype.setMaxNumberOfCars = function (newMaxNumberOfCars) {
    this.maxNumberOfCars = newMaxNumberOfCars;
}

// const dealership1 = new Dealership("Kintore Car Sales", 50);
// dealership1.addCar(car2);
// dealership1.addCar(car3);
// console.log(dealership1);
// console.log("Show dealership", dealership1.getCarsInStock());





module.exports = Dealership;
