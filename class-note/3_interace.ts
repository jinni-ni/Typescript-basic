interface User {
    age: number;
    name: string;
}

var seho: User = {
    age: 33,
    name: '세호',
}

function getUser(user: User) {
    console.log(user);
}
const cap = {
    age: 20,
    name: 'cap',
}
getUser(cap);

// 함수의 spec 에 인터페이스 활용
interface Sumfunction{
    (a:number, b:number): number;
}
var sum: Sumfunction;

sum = function(a:number, b:number): number{
    return a + b;
}

interface StringArray{
    [index: number]: string;
}

var arr2: StringArray = ['a','b','c'];

interface StringRegexDictionary{
    [key: string]: RegExp;
}

var file: StringRegexDictionary = {
    cssFile: /\.css$/,
    jsfile: /\.js$/,
}

// file['cssFile'] = 'a';

// interace 상속
interface Person {
    age: number;
    name: string;
}

interface Developer extends Person{
    language: string;
}

var capt: Developer = {
    language: 'hi',
    age: 100,
    name: 'captin',
}