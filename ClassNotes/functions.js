
/* function exclaim(message){
    console.log(message+'!!!');
} */

let methods= Object.getOwnPropertyNames(Number.prototype);
console.log(methods);

let person= new Object();
person.name="John";

let person2={
    name:"Mary",
    age:21,
    city:"CA"
}
let student={
    name:"Johne Joe",
    age:20,
    adresss:{
        street:"123Main street",
        city:"New York",
        country:"USA"
    }
}
console.log("student.adress.city",student.adresss.city);

let person4={
    name:"John Doe",
    age:30,
    sayHello:function(name){
        console.log('Hello my name is ${name}');
    }
}
person4.sayHello{"John Doe"};
// Object constructors
function Person(name,age,city){
    this.name=name;
    this.age=age;
    this.city=city;
}
