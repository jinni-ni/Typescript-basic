// function logMessage(value: any){
//     console.log(value);
// }

// logMessage('hello');
// logMessage(100);

var sayho: string | number | boolean;

function logMessage(value: string | number){
    //type guard
    if(typeof value === 'number'){
        value.toLocaleString();
    }
    if(typeof value === 'string'){
        value.toString();
    }
    throw new TypeError('type error');
}

logMessage('hello');
logMessage(100);

interface Developer {
    name: string,
    skill: string,
}

interface Person {
    name: string,
    age: number,
}

function askSomeone(someone: Developer | Person){
    someone.age = 3;
}