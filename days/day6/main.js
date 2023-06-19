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