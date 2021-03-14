// function logText(text){
//     console.log(text);
//     return text;
// }

// logText(10);
// logText('hello');
// logText(true);

// function logText<T>(text: T): T{
//     console.log(text);
//     return text;
// }

// logText(10);
// logText<string>('hello');
// logText<boolean>(true);


// // 동일한 코도를 다른 타입을 받기위해 중복 선언
// function logText(text: string){
//     console.log(text);
//     text.split('').reverse().join('');
//     return text;
// }

// function logNumber(number: number){
//     console.log(number);
//     return number;
// }


// logText('hello');
// const num = logNumber(10);

// function logText(text: number | string){
//     console.log(text);
//     return text;
// }

// //a 는 string과 number union type 으로 추론
// const a = logText('a');
// a.split('') // error 

// logText(10);
function logText<T>(text: T): T{
    console.log(text);
    return text;
}

const str = logText<string>('abc');
str.split('');

const flag = logText<boolean>(true);
flag.valueOf();

interface Dropdown<T, T2>{
    value: T;
    selected: T2;
}
const obj: Dropdown<number, boolean> = {value: 10, selected: true};
const obj2: Dropdown<string, boolean> = {value: 'string', selected: true};

function logTextLength<T>(text: T[]): T[]{
    // type이 T이기 때문에 length를 사용하면 오류
    // -> 매개변수에 배열이라는 힌트를 제공 []
    console.log(text.length);

    return text;
}

logTextLength<string>(['h','i']);

// 정의된 type 사용
interface LengthType {
    length: number;
}

function logTextLengths<T extends LengthType>(text: T): T {
    text.length;
    return text;
}
// error length type이 없기 때문
// logTextLengths(10);

logTextLengths({length: 20});

interface ShoppingItem{
    name: string;
    price: number;
    stock: number;
}

// shoppingitem item 의 type만 사용할 수 있다.
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}
getShoppingItemOption(10);
getShoppingItemOption('stock');
getShoppingItemOption<string>('hello');
getShoppingItemOption('name');

