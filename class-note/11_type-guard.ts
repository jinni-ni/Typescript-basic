interface Developer{
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

// union type은 Developer, Person 공통된 속성만 접근할 수 있음
function introduce(): Developer | Person {
    return {name: 'Tony', age:33, skill:"making"}
}

var ton = introduce();
// error
// name 만 접근 가능
// console.log(ton.age);

if((ton as Developer).skill){
    var skill = (ton as Developer).skill;
    console.log(skill);
} else if((ton as Person).age){
    var age = (ton as Person).age;
    console.log(age);
}

// 넘겨 받은 target이 해당 타입인지 검사
// type guard 정의
function isDeveloper(target: Developer | Person): target is Developer {
    // target의 skill이 정의되어 있으면 developer type
    return (target as Developer).skill !== undefined;
}

if(isDeveloper(ton)){
    console.log(ton.skill);
}else {
    console.log(ton.age);
}

