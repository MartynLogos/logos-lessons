// let i = 0;

// while(true) {
//     i++;
//     console.log(i);
//     if (i == 5) {
//         break;
//     }
// }


// for (let i = 0; i < 10, i != 3; i++) {
//     console.log(i);
//     if (i == 50) {
//         break;
//     }
// }

// let numbers = [10, 12, 14, 16, 18, 20]; // 6

// let products = [{ name: 'apple', price: 10 }, ..., {name: 'orange', price: 15}];

// console.log(numbers[1]);

// for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }
// let i = 0;
// while (i < numbers.length) {
//     i++;
//     console.log(numbers[i])
// }


// for (let i = 0; i < 10; i++) {
//     if (i % 2) {
//         continue

//     }
//     console.log(i);
//     // console.log('______ending_______');
// }

// let arr = [1, 'string', {}, Symbol(), []];

// let Organizations = [
//     {
//         orgName: 'Apple',
//         age: 30,
//         staff: [
//             { name: 'vasia', age: 35 }
//         ]
//     },
//     { orgName: 'microsoft', age: 35 },
// ]

// let matrix = [
//     [1, 2, 3], //0
//     [1],  //1
//     [1, 2, 3, 4, 5] //2
// ];

// console.log(matrix[2][2]);

// // console.log(matrix[i]);// matrix[0] -> [1, 2, 3]
// point: {
//     for (let i = 0; i < 3; i++) {
//         console.log(matrix[i]);

//         for (let j = 0; j < matrix[i].length; j++) {
//             console.log(matrix[i][j]);

//             if (i === 0) {
//                 break point;
//             }
//             console.log(1);
//         }
//     }
// }

// array[j] -> array = matrix[i] -> matrix[i][j]

// let answer = Number(prompt('enter a number')); // 1

// let answer = 1;

// if (a === 1) {
//     console.log('positive');
// } else if (a < 0) {
//     console.log('negative');
// } else if (a === 0) {
//     console.log('zero');
// } else {
//     console.log('error');
// }

// switch (answer) {
//     case 1:
//         document.body.style.background = 'green';
//         break;
//     case 2:
//         document.body.style.background = 'red';
//         break;
//     case 3: 
//         document.body.style.background = 'blue';
//         break;
//     case 4:
//         document.body.style.background = 'yellow';
//         break;
//     case 5:
//         document.body.style.background = 'orange';
//         break;
//     case 6:
//         document.body.style.background = 'brown';
//         break;
//     default:
//         document.body.style.background = 'white';
//         break;
// }


// let a = Number(prompt('enter first number '));
// let b = Number(prompt('enter second number '));

// console.log(a ** b);

// let res = 1;

// for(let i = 1; i <= Math.abs(b); i++) {
//     console.log('i: ', i);
//     if (b > 0) {
//         res *= a;
//     } else if (b < 0) {
//         res /= a;
//     } else {
//         res = 1;
//     } 
// }

// console.log(res);


// function greeting() {
//     alert('HELLO');
//     // document.body.style.background = 'green';
// }



// for(let i = 0 ; i < 3; i++ ) {
//     greeting();
// }

// function chooseColor() {//todo: modify

//     let answer = Number(prompt('enter a number'));

//     switch (answer) {
//         case 1:
//             document.body.style.background = 'green';
//             break;
//         case 2:
//             document.body.style.background = 'red';
//             break;
//         case 3:
//             document.body.style.background = 'blue';
//             break;
//         case 4:
//             document.body.style.background = 'yellow';
//             break;
//         case 5:
//             document.body.style.background = 'orange';
//             break;
//         case 6:
//             document.body.style.background = 'brown';
//             break;
//         default:
//             document.body.style.background = 'white';
//             break;
//     }

// }

// let first, second; // undefined

// function calculate() {
//     first = Number(prompt('enter first number'));
//     second = Number(prompt('enter second number'));
// }

// function sum(a = 0, b = 0) {
//     console.log(a + b);
// }

// function minus(a = 0, b = 0) {
//     console.log(a - b);
// }


// minus(7, 4);

// let birthDate = prompt('enter your birth year');//2000

// let yearOfBirth = 10;

// function calculateAge(yearOfBirth) {
//     console.log('yearOfBirth-1: ', yearOfBirth);
//     console.log(2022 - yearOfBirth);
// }

// console.log('yearOfBirth-2: ', yearOfBirth);


// calculateAge(birthDate);

//calculateAge(2000)

// console.log(yearOfBirth);

// function sum(a = 0, b = 0) {    // => 2 + 3 => 5
//     console.log('result');
//     return a + b;
// }

// let result = sum;

// let a = result(3,5)

// console.log(a);

// // console.log(result);

// function minus(a = 0, b = 0) {
//     console.log(a - b);
// }


// function sum() {// arguments, this
//     let res = 0;

//     for(let i = 0; i < arguments.length; i++) {
//         res += arguments[i];
//         console.log(arguments[i]);
//     }

//     return res;
// }

// let result = sum(1, 2, 3, 4, 5,6,7,8,9,10);

// console.log('result =', result);


function greeting (name) {
    // if(name) {
    //     return `Hello ${name}`;
    // } else {
    //     return 'Hello guest';
    // }

    // return name ? `Hello ${name}` : ' Hello guest';

    return `Hello ${name ? name : 'guest'}`;

}

let result = greeting('Martyn');

console.log(result);
