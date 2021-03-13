function Person(name, age){
    this.name = name;
    this.age = age;
}

var cpat = new Person('cpat', 30);

//ES6
class Person {
    constructor(name, age){
        console.log('create complete!');
        this.name = name;
        this.age = age;
    }
}

var seho = new Person('세호', 30); 
console.log(seho);
