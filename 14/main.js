// const Human = function (arguments) {
//     this.name = arguments.name
//     this.age = arguments.age
// }
// Human.prototype.info = function () {
//     console.log(`name is ${this.name}, age is ${this.age}`)
// }
//
// const Car = function (arguments) {
//     this.brand = arguments.brand
//     this.model = arguments.model
//     this.year = arguments.year
//     this.numberplate = arguments.numberplate
// }
// Car.prototype.setOwner = function (owner) {
//     if (owner.age < 18) {
//         console.log('age is below 18')
//         return
//     }
//     this.owner = owner
// }
// Car.prototype.info = function () {
//     console.log(`brand is ${this.brand}, model is ${this.model}, year is ${this.year}, numberplate is ${this.numberplate}.` + (this.hasOwnProperty('owner') ? ` Owner name is ${this.owner.name}, he is ${this.owner.age} years old` : ``))
// }

class Human {
    constructor(args) {
        this.name = args.name;
        this.age = args.age;
    }
}

Human.prototype.info = function () {
    console.log(`name is ${this.name}, age is ${this.age}`)
}

class Car {
    constructor(args) {
        this.brand = args.brand
        this.model = args.model
        this.year = args.year
        this.numberplate = args.numberplate
    }
}
Car.prototype.setOwner = function (owner) {
    if (owner.age < 18) {
        console.log('age is below 18')
        return
    }
    this.owner = owner
}
Car.prototype.info = function () {
    console.log(`brand is ${this.brand}, model is ${this.model}, year is ${this.year}, numberplate is ${this.numberplate}.` + (this.hasOwnProperty('owner') ? ` Owner name is ${this.owner.name}, he is ${this.owner.age} years old` : ``))
}

const human1 = new Human({name: 'Human1', age: 8})
const human2 = new Human({name: 'Human2', age: 18})
const human3 = new Human({name: 'Human3', age: 123})
const car1 = new Car({brand: 'brand1', model: 'model1', year: 'year1', numberplate: 'number1'})
const car2 = new Car({brand: 'brand2', model: 'model2', year: 'year2', numberplate: 'number2'})
const car3 = new Car({brand: 'brand3', model: 'model3', year: 'year3', numberplate: 'number3'})

console.log(human1, human2, human3)
console.log(car1, car2, car3)
car1.setOwner(human1)
car2.setOwner(human2)
car3.setOwner(human3)
console.log(car1, car2, car3)