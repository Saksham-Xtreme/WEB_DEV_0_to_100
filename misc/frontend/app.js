// factory function

// function PersonMaker(name , age){
//     const person ={
//         name: name,
//         age: age,
//         talk(){
//             console.log(`HI, my name is ${this.name}`);
//          }
//     };
    

//     return person;
// }


// constructors - doesnt return anything
// function Person(name , age){
//     this.name= name;
//     this.age=age;
// }

// Person.prototype.talk = function() {
//     console.log(`HI , My name is ${this.name}`);
// }

class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;

    } 
    talk(){
        console.log(`HI , My name is ${this.name}`);
    }
}

class Student extends Person{
    constructor(name, age, marks){
        super(name, age);
        this.marks=marks;
    }
}


class Teacher extends Person {
    constructor(name, age, subject){
        super(name, age);
        this.subject=subject;

    }
}


let p1 = new Person("Saksham", 20);
let p2 = new Person("Muskan", 19);

