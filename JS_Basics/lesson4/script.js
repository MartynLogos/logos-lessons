// 1. Function. function declaration, fn expression, arrow fn. 
// 2. Рекурсія

// foo();

// function foo() {
//     console.log('hello');
//     return 'hello';
// }

// foo();
// let fn1 = foo; // => fn
// let fn2 = foo(); // => result of 'foo' function

// let a = prompt('enter', 'something');

// console.log(a);

// foo();

// var foo = function() {
//     console.log('function expression');
// }

// foo();

// const foo = function(name = 'guest') {
//     let outputText = `hello, ${name}`;

//     return outputText;
// }

// // foo();

// let someInfo = foo('Martyn');

// console.log('some info: ', someInfo);


// foo = 5;
// console.log(foo);

// let greeting = function() {
//     console.log('first');
// }

// ...


// greeting = function() {
//     console.log('second');
// }

// const expressionFn = function() {
//     console.log('function expression');
// }

// const arrowFn = () => {
//     console.log('arrow function');
// }

// const greeting = function(name) {
//     return `hello ${name}`;
// }

// const arrowGreeting = name => `hello ${name}`;

// const sqrtFn = function(x) {
//     return x**2;
// }

// const powFn = (x, y) => x**y;

// console.log(powFn(3, 4));

// let userAge = Number(prompt('enter your age', ''));

// const checkAge = function (age) {
//     if (age >= 18) {
//         return 'access allowed';
//     } else {
//         return 'access denied';
//     }
// }

// const checkAge = age => age >= 18 ? 'access allowed' : 'access denied';

// let access = checkAge(userAge);

// let access = (userAge > 18)
//     ? () => console.log('access allowed')
//     : () => console.log('access denied');

// access();

// console.log(access());

// this

// 5! = 1 * 2 * 3 * 4 * 5;

// function factorial(x) {
//     let result = 1;

//     for(let i = 1; i <= x; i++) {
//         result *= i;
//     }

//     return result;
// }
// 5! = 5 * 4 * 3 * 2 * 1;

// function factorial(x) { // 5 => 120
//     if(x <= 1) {
//         return x;
//     }

//     return x * factorial(x - 1);//5 * 4!  => 5 *24;
// }

// const arrowFactorial = x => x <= 1 ? x : x * arrowFactorial(x - 1);

// console.log(arrowFactorial(4));

// // EX: factorial -> arrow fn, ternary


// const sum x { return x + 5};

// const sum = x => x + 5;


// let res = factorial(-1);

// console.log(res);

// fn counter => 0, 1, 2, 3

// function coutner ()
// let counter = 0;

// let result = document.getElementById('counter');

// console.log(result);

// const count = () => {
//     counter++;

//     // result.innerHTML = `${counter}`;
//     result.innerText = `${counter}`;

// document.write(`<p>${counter}</p>`);
// }

// const obj = {
//     firstName: 'Alex',
//     lastName: 'Kift'
// }

// console.log(obj);

// obj.firstName = 'Max';

// console.log(obj);

// const name = 'alex'
// console.log(name);

// name = 'max';

// console.log(name);

// const obj1 = { name: 'vasia', lastName: 'Pypkin'};

// const obj3 = {name: 'martyn', lastName: 'kaminetskyi'}

// const obj2 = obj1; // => { name: 'vasia', lastName: 'Pypkin'}

// console.log('1:', obj1);
// console.log('2:', obj2);

// obj1.name = 'max';

// console.log('1:', obj1);// 
// console.log('2:', obj2);

// obj2.lastName = 'popov';

// obj2 = obj3;

// console.log('1:', obj1);
// console.log('2:', obj2);


// let a = 5;
// let b = a;

// a = 3;

// b = 2;

// console.log(a);
// console.log(b);


// function greeting(name) {
//     console.log(`hello ${name}`);
// }

// let username = 'Martyn';

// let userFirstName = 'Vasia'

// greeting(username);


// let a, b;

// function startCalculate() {
//     a = Number(prompt('enter first number'));
//     b = Number(prompt('enter second number'));

//     const result = sum(a, b); // 2,3  => 5

//     console.log(result); //5
// }

// function sum(x, y) {//2,3
//     return x + y; //2 + 3 = 5
// }

// []

// const obj = {name: 'Elon', lastName: 'Mask'};

// const obj2  = {};

// Object.freeze(obj1);

// console.log(2);
// console.log(2);

// for(let i = 0; i < 10; i++) {
//     console.log(2);
// }

// function loop(x = 10) {
//     if(x === 0 || x === 5) {
//         return ;
//     }

//     console.log(x);//10
//     loop(x - 1);
// }


// let a = 5;
// let b;//undefined

// function foo() {
//     b = 1;

//     console.log(a);

//     function foo2() {
//         // let b;//undefined
//         b = b + 1; // b++;
//         console.log('inside second function', b + a);

//         let obj1 = {
//             name: 'vasia',
//             sum: function foo3() {
//                 let b = 3;
//                 console.log('inside third function', b);
//                 return b;
//             }
//         }
        

//         return obj1;
//     }


//     const someObject = foo2();

//     console.log(someObject);

//     console.log(someObject.fn());

// }

// foo();// b = 10

// console.log('outside: ', b);


// let someFunction = function(){
//     ...
// }


function calculate(a, b, ...args) { // [3,4,5] => 3,4,5

    console.log(args);
    // sum(a, b);

    if(args.length !== 0) {
        console.log(arguments);
    } else {
        console.log(a, b);
    }

    function foo2(name, lastName){
        console.log( `hello ${name} ${lastName}`);
    }

    foo2(...args);
}

calculate(1, 2, 'Elon', 'Mask');


// calculate(1, 2, 3, 4, 5);
// calculate(1, 2);

// prompt('enter', '18');
// prompt('enter');
// prompt();


// let a = function(){

// }

// let array1 = [1,2,3,4];
// let array2 = [5,6,7,8];

// let arr = [...array1, ...array2]

// console.log(array1);
// console.log(array2);
// console.log(arr);


