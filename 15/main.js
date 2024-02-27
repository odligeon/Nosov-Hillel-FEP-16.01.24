class Human {
    constructor(args) {
        this.name = args.name;
        this.age = args.age;
    }
}

class Apartment {
    residents = []

    addResident(human) {
        this.residents.push(human)
    }
}

class Building {
    constructor(max) {
        this.max = max;
    }

    apts = []

    addApt(apartment) {
        (this.apts.length < this.max) ? this.apts.push(apartment) : console.log('А всё, места в домике закончились')
    }
}

const human1 = new Human({name: 'Oleg', age: 36})
const human2 = new Human({name: 'Max', age: 326})
const human3 = new Human({name: 'Tratata', age: 6})
const apt1 = new Apartment()
const apt2 = new Apartment()
const apt3 = new Apartment()
const build1 = new Building(2)

apt1.addResident(human1)
apt1.addResident(human2)
apt1.addResident(human3)
apt1.addResident(human1)
build1.addApt(apt1)
build1.addApt(apt2)
build1.addApt(apt3)
build1.addApt(apt1)
console.log(build1)