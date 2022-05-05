// for (let i = 1; i <= 7; i++) {
//     console.log('Day: ', i);
// }

// 1..10

// do while
// while do

// let i = 0;


// while (false) {
//     i++;
//     console.log(i);
// }

// do {
//     console.log(i);
//     i++;
// } while(false)


// [-100, 100] : % 10

// for (let i = -100; i <= 100; i+= 10) {
//     document.write(`<h4>${i}</h4>`)
// }

// count
// [1000; 0]  count = count/5 - 20

// for (let i = 1000; i > 0; i = i / 3 - 20) {
//     document.write(`<h3>${i}</h3>`);
// }

// [0 - 1000] i % 3


// let n = parseInt(prompt('Enter your number')); // 500



// for (let i = 3; i < n; i+=3) {
//     document.write(`<h3>${i}</h3>`);
// }


// [a, b] % 2

// let a = parseInt(prompt('Enter number a:'));// 1
// let b = parseInt(prompt('Enter number b:'));// 947

// i = 100 ; i < 0; i ++
// for (let i = a; i < b; i++) {
//     if (!(i % 2)) document.write(`<h3>${i}</h3>`);
// }


// !1 -> false
// !2 -> false
// i % 2 // => 0 % 2

// 5 % 2 // 1

// 4 % 2 // 0

// 6 % 2 // 0

// 8 % 3 // 2

// 28 : 4 weeks, 7 days
// for (let day = 1; day <= 28; day++) {
//     document.write(`<p>${day}<p>`)
// }


// 1 month : 1..4 weeks
// 4 weeks : 1..7 days
// 7 day
// for (let week = 1; week <= 4; week++) { // 1 month
//     document.write(`<h2>week ${week}</h2>`);

//     for (let day = 1; day <= 7; day++) { // 1 week
//         document.write(`<p>Day ${day}<p>`);

//         for (let hour = 0; hour < 24; hour++) { // 1 day

//         }
//     }
// }

//[0 .. 20]

// [a .. b]
// let a;//0
// let b;//100

// let sum = 0;

// for (let i = a; i < b; i++) {
//     sum += i;// 0 + 0 + 1 + 2 + 3 ... + 19
// }

// console.log(sum);

// '1 2 3 4 5'

// let str = '';

// for (let i = 1; i <= 5; i++) {
//     if (i == 1) 
//         str = str + i;
//     else 
//         str = str + ', ' + i ;
// }

// console.log(str);