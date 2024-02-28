class Student {
    constructor(args) {
        this.name = args.name
        this.surname = args.surname
        this.bdyear = args.bdyear
    }

    ratings = new Array(25)
    visitings = new Array(25)
    lessonCounter = 0
    visitCounter = 0
    ratingCounter = 0

    present() {
        if (this.lessonCounter >= 25) {
            console.log('А всё, больше занятий не будет')
            return
        }
        this.visitings[this.lessonCounter] = true
        this.setRandomRating(this.ratingCounter)
        this.lessonCounter++
        this.visitCounter++
    }

    absent() {
        if (this.lessonCounter >= 25) {
            console.log('А всё, больше занятий не будет')
            return
        }
        this.visitings[this.lessonCounter] = false
        this.lessonCounter++
    }

    summary() {
        let date = new Date(Date.now()).getFullYear()
        let age = date - this.bdyear
        let midRating = (this.ratingCounter > 0) ? this.ratings.reduce((acc, current) => acc + current) / this.ratingCounter + 1 : 0
        let midVisitings = (this.visitCounter / this.lessonCounter).toFixed(2)
        console.log(`Возраст студента - ${age}, средний балл - ${midRating}, среднее посещение - ${midVisitings}`);
        if (midRating > 90 && midVisitings > 0.9) {
            console.log('Молодец')
        } else if (midRating > 90 || midVisitings > 0.9) {
            console.log('Хорошо, но можно лучше')
        } else {
            console.log('Редиска')
        }
    }

    setRandomRating(counter) {
        this.ratings[counter] = Math.floor(Math.random() * 100)
        this.ratingCounter++
    }
}

function fillVisit(student) {
    for (let i = 0; i < Math.floor(Math.random() * 26); i++) {
        Math.floor(Math.random() * 2) ? student.present() : student.absent()
    }
}

let stud1 = new Student({name: 'name1', surname: 'surname1', bdyear: 1987})
let stud2 = new Student({name: 'name2', surname: 'surname2', bdyear: 1988})
let stud3 = new Student({name: 'name3', surname: 'surname3', bdyear: 2000});

fillVisit(stud1)
fillVisit(stud2)
fillVisit(stud3)

console.log(stud1, stud2, stud3)
console.log(stud1.summary(), stud2.summary(), stud3.summary())

