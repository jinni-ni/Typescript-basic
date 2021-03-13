interface Person {
    name: string;
    age: number;
}

type Person2 = {
    name: string,
    age: number,
}

var seho: Person2 = {
    name: '세호',
    age: 100,
}

type MyString = string;
var myStr: MyString = 'string';

type Todo = {id:number, title:string, done:boolean};

function getTodo(todo: Todo){
    
}