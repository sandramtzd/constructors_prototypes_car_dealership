const Car = require('./Car');

const car1 = new Car("Toyota", 1500, "Diesel");


describe('Showing car details', () => {
    
    test('Can get the manufacturer name?', () => {
        expected = "Toyota";
        actual = car1.getManufacturer();
        expect(actual).toBe(expected); 
       
    });

    test('Can get the cars price?', () => {
        expect(car1.getPrice()).toBe(1500);
    })

    test('Can get the engine type?', () => {
        expect(car1.getEngineType()).toBe("Diesel");
    })

    test('Can set the car manufacturer?', () => {
        expected = "Ford";
        car1.setManufacturer("Ford");
        actual = car1.getManufacturer();
        expect(actual).toBe(expected);
        
    })

    test('Can set the car price?', () => {
        expected = 1000;
        car1.setPrice(1000);
        actual = car1.getPrice();
        expect(actual).toBe(expected);
        
    })

    test('Can set the car engine type?', () => {
        expected = "Hybrid";
        car1.setEngineType("Hybrid");
        actual = car1.getEngineType();
        expect(actual).toBe(expected);
        
    })






});