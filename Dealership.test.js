const Dealership = require("./Dealership");
const Car = require("./Car");

const car1 = new Car("Toyota", 34263, "Electric");
const car2 = new Car("Toyota", 20000, "Petrol");
const car3 = new Car("BMW", 56000, "Hybrid");
const car4 = new Car("BMW", 15000, "Gas");
const car5 = new Car("Nissan", 50000, "Hybrid");
const car6 = new Car("Nissan", 15000, "Electric");

const dealership1 = new Dealership("Kintore Car Sales", 6);



describe('Showing dealership details', () => {

    test('Can get the dealership name?', () => {
        expect(dealership1.getDealershipName()).toBe("Kintore Car Sales");
    });

    test('Can get the dealership maximun number of cars?', () => {
        expect(dealership1.getMaxNumberOfCars()).toBe(6);
    });

    test('Can set the dealership name?', () => {
        expected = "Aberdeen Car Sales";
        dealership1.setDealershipName("Aberdeen Car Sales");
        actual = dealership1.getDealershipName();
        expect(actual).toBe(expected);
    })

    test('Can set the maximun number of cars?', () => {
        expected = 7;
        dealership1.setMaxNumberOfCars(7);
        actual = dealership1.getMaxNumberOfCars();
        expect(actual).toBe(expected);
    })

    test('Can add a car to the dealership stock?', () => {
        expected = [car1];
        dealership1.addCar(car1);
        actual = dealership1.getCarsInStock();
        expect(actual).toStrictEqual(expected);

    })

    test('Can count how many car are in stock?', () => {
        expected = 1;
        actual = dealership1.countCarsInStock();
        expect(actual).toBe(expected);
        
    })




})

