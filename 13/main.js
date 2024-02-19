// const user = {
//     name: 'Oleg',
//     age: 36,
//     getAge: function() {
//         return this.age
//     },
//     setAge: function (age) {
//         return this.age = age
//     }
// }
//
// console.log(user)
// console.log(user.getAge())
// // console.log(user.setAge(5))
// // console.log(user.getAge())
//
// const  user2 = {
//     name: 'Ne Oleg',
//     age: 1233123,
// }
//
// console.log(user2)
// console.log(user.getAge.call(user2))
// console.log(user2)
const up = function () {
    this.step++
    return this
}

const down = function () {
    this.step--
    return this
}

const showStep = function () { // показывает текущую ступеньку
    alert(this.step);
}

const ladder = {
    step: 0,
    up: up,
    down: down,
    showStep: showStep,
};

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1

// Змініть код методів up, down і showStep таким Таким чином, щоб їх виклик можна було зробити по ланцюжку, наприклад:
ladder.up().up().down().showStep(); // 1