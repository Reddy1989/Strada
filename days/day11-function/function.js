// function sayHi(name) {

//     const greeting = 'Привет, ' + name + ' братишка!';

//     console.log(greeting);
// }

// sayHi('sanya')

//нельзя использовать параметры и переменные вне функции.

// function sayHi(name) {

//     const greeting = 'Привет, ' + name + ' братишка!';

// }
// console.log(greeting);

// sayHi('sanya')

// function checkAge(age) {
//     if(age < 18) {
//         console.log('you are not allowed') 
//     } else {
//         console.log('you are welcome!');   
//     }   
// }

// checkAge(19)

//замена имени

// let user = 'Alexunder' 

// function changeUserName() {
//     user = 'Alex'

//     console.log(user);
// }

// changeUserName();

// function summ(a, b) {
//     let sum = a + b;
//     return sum;
// }

// console.log(summ(1, 2));

// function checkMyAge(age) {
//     if(age >= 18) {
//         console.log('u will go')
//     }
// }

// function ShowMovie(age) {
//     if(!checkMyAge) {
//         return
//     }
//     console.log('U will see movie')
// }

// ShowMovie(19)


function calc(a, b, operation) {  

    if(operation == 'add') {
       return a + b;
    }
    else if(operation == 'multy') {
        return a * b;
    }
    else if(operation == 'subtract') {
       return a - b;
    }
}

console.log(calc(1, 2, 'multy'));

