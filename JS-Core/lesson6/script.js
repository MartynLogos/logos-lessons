// 1. Number (and Math) :

// let a = 5;

// console.log(typeof a);

// let b = new Number(5);

// console.log(typeof b);

// console.log('' === String(''));
// console.log('' === new String(''));

// let a = Number(prompt('enter your number'));


// let a = 50;

// let b = 50.0;

// console.log(a === b);


// console.log(Number('3213.32'));
// console.log(Number('dsads'));
// console.log(Number(undefined));
// console.log(Number(null));

// let a = Number(prompt()); // NaN

// console.log(Number.MAX_VALUE);

// console.log(Number.isFinite(10));

// console.log(Number.isInteger(1.5));

// console.log(Number.isNaN(a));

// console.log(Number.length);

// console.log(Math.max(1,2,3,0));

// console.log(Math.round(Math.random()*100));

// let a = [];

// for(let i = 0; i < 100; i++) {
//     a[i] = Math.round(Math.random()*100)
// }

// console.log(a);
// console.log(Math.max(...a));
// console.log(Math.min(...a));


// function randomColor() {
//     const r = Math.round(Math.random()*(255 - 0));
//     const g = Math.round(Math.random()*(255 - 0));
//     const b = Math.round(Math.random()*(255 - 0));

//     return [r, g, b];
// }

// console.log(randomColor());

// const bodyBackground = randomColor();

// document.body.style.background = `rgb(${bodyBackground})`;


// # 2. Arrays :

// let a = [1, '', {}, []];

// let b = new Array(11,22,33);

// let arr = [];

// for(let i = 0; i < 10; i++) {
//     arr[i] = i;
//     console.log(arr);
// }

// console.log('arr1: ', arr);

// arr.push(100);

// console.log(arr[10]);

// let a = Math.round(Math.random()*10);
// console.log(a);

// let barr = [...arr, a];


// console.log('arr2: ',  arr);

// barr =[...arr, ...barr]

// console.log('arr2: ',  barr);

// let arr = [];

// arr.push(1)

// console.log(arr);

// function someFn(a) {
    
//     return
// }

// let obj = {
//     value: [],
//     push: function (a) {
//         this.value = [...this.value, a];
//         return a;
//     }
// }

// let arr = [1, 2, 3, 4, 5, 3];

// let users = [
//     { name: 'vasia', age: 20, email: '1@mail.com', id: '1' },
//     { name: 'Max', age: 12, email: '2@mail.com', id: '2' },
//     { name: 'Olena', age: 32, email: 'e@mail.com', id: '3' },
//     { name: 'a', age: 20, email: '1@mail.com', id: '1' },
//     { name: 'Oksana', age: 18, email: '2@mail.com', id: '2' },
//     { name: 'c', age: 42, email: 'e@mail.com', id: '3' },
//     { name: 'Vasylyna', age: 10, email: '1@mail.com', id: '1' },
//     { name: 'e', age: 2, email: '2@mail.com', id: '2' },
//     { name: 'g', age: 34, email: 'e@mail.com', id: '3' },
//     { name: 'Mariana', age: 25, email: '1@mail.com', id: '1' },
//     { name: 'ax', age: 8, email: '2@mail.com', id: '2' },
//     { name: 'na', age: 76, email: 'e@mail.com', id: '3' },

// ];

// console.log(arr);
// arr.push(1);
// console.log(arr);
// arr.pop();
// console.log(arr);


// console.log(arr);
// arr.unshift(1);
// console.log(arr);
// arr.pop();
// console.log(arr);

// console.log(arr.);

// let id = 2;

// let b = users.find(element => element.id == id);

// console.log(b);

// let oldUsers = users.filter(user => user.age > 18);

// console.log(oldUsers);

// let search = 'na';

// let filteredUsers = users.filter(user => user.name.includes(search));

// console.log(filteredUsers);

// let name = 'Mariana';

// let index = users.findIndex(user => user.name === name);

// console.log(index);

// let a = users.filter(user => user.name !== name);

// console.log(a);

// users.forEach(user => user.name = user.name.toUpperCase());

// function updateUsername(user) {
//     user.name = user.name.toUpperCase();
// }

// updateUsername = (user) => {
//     user.name = user.name.toUpperCase();
// }

// console.log(users);

// users.map()

// let numbers = [1, 2, 3, 4, 5];

// let a = [];

// for(let i = 0; i < numbers.length; i++) {
//     a.push(numbers[i] ** 2);
// }

// console.log(a);

// const powFn = a => a ** 2;

// let powNumbers = numbers.map(powFn);

// console.log(powNumbers);

// let powNumbers = numbers.forEach(num => num ** 2);

// console.log(numbers);
// console.log(powNumbers);

// function powFn(a) {
//     return a ** 2;
// }

// let permissions = [ { name: 'update users', code: 101 } ];
// let userPermission = [101, 102, 103]

// let stringUserPermissions = userPermission.join('-');

// console.log(stringUserPermissions);

// let reversedNumbers = numbers.reverse();

// console.log(reversedNumbers);

// hw: reverse by yourself
// hw2: [1,2,3,4,5,6], n = 3 => [4,5,6,1,2,3]

// let a = users.some(user => user.age > 80);

// console.log(a); // true

// let b = users.every(user => user.age > 0);

// console.log(b);
// let obj = { title: 'banana', price: 10 };

let products = [
    { title: 'banana', price: 10 },
    { title: 'orange', price: 15 },
    { title: 'apple', price: 5 },
    { title: 'olive', price: 25 },
    { title: 'potato', price: 20 }
];


// let numbers = [10, 20, 30, 40]


// let a = products.includes(obj);
// let a = numbers.includes(10);

// console.log(a);
// let totalPrice = products.reduce((result, product) => {
//     if(product.price > 12) {
//         result.push(product);
//     }
//     return result;
// }, []);

// console.log(totalPrice);

let a = products.slice(2,4);

console.log(a);
console.log(a);

