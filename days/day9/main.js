console.log(5 > 4); // true +
console.log("ананас" > "яблоко"); //false +
console.log("2" > "12"); //false - сравниваются по первому символу
console.log(undefined == null); //true +
console.log(null == "\n0\n"); //true - null не равен строке
console.log('-------')
console.log(null === +"\n0\n"); //false - строка становиться числом ноль
console.log(2 > '3'); //true - 3 преобразуется в число будет больше чем 2
console.log(1 > NaN); //true - с любым числом будет false
console.log(2 > undefined); //true - undefined равно только себе и null
console.log('-------')
console.log(undefined == undefined);//false - всегда равен себе
console.log(undefined == NaN); //false +
console.log(NaN == 0); //false +
console.log(undefined == 0); //false +
console.log(null == 0); // true -  typeof null -> object 
console.log('-------')
console.log(null < 0); //false +
console.log(null > NaN); //false +
console.log(null > undefined); //true - null == undefined 
console.log(null == undefined); //false - 
console.log(null === undefined); //false +
console.log('-------')
console.log(null == 0); //true - если +null то true а так false 
console.log(null === null); //true +
console.log(NaN == undefined); //true - undefined == null && undefined
console.log(undefined < 2); //true - всегда false 
console.log('----------')

console.log("2" > "11");


