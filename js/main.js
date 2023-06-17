// // alert("hello, world from file"); 

// let userName = 'alex';
// let userHeight;
// // let ИмяПользователя <- неправильно названная переменная 
// userHeight = 173;
// console.log(userName + " " + userHeight);
// console.log(2 + null);
// console.log(+null);
// console.log(`string + ${1 + 3}`)
// console.log(true, false);
// let a = 1;
// b = a;
// console.log(b);

// const MyAge = 34;
// // MyAge = 30;
// console.log(MyAge);

let NewNum = '6';
let NewString = 6;
let NewBoolean = true;
let NewStringWithLetter = '2b';
const FIRSTNAME = 'Alexander';

console.log('Базовые операторы "умножение"');

console.log(NewNum * NewString);



console.log(NewNum + NewString);
console.log(NewNum - NewString);
console.log(NewNum / NewString);

console.log('Проверка на тип');

console.log(typeof NewNum);
console.log(typeof NewString);
console.log(typeof NewBoolean);
console.log(typeof FIRSTNAME);


console.log('Явное преведние типов');

console.log(Number(NewNum) + Number(NewString));
console.log(Number(NewNum) + Number(NewStringWithLetter));

console.log('Остаток');

console.log(533 % 2);

console.log('Возведение в степень');

console.log(2 ** 4);

console.log('Инкремент и декремент');

let IncrementedCounter = 4;
let DecrementedCounter = 4;

IncrementedCounter++
DecrementedCounter--

console.log(IncrementedCounter);
console.log(DecrementedCounter);