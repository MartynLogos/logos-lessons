// window
// document
// console.log(window);

// let obj1 = {
//     name: 'vasia',
//     age: 24
// };

// let obj2 = new Object({ id: 1, title: 'some title' });

// console.log(obj1);

// console.log(obj2);

// console.log(obj1.name);
// console.log(obj1.age);

// console.log(obj1['name']);

// console.log(obj1)

// obj1.email = '1@mail.com';

// delete obj1.age

// let word = prompt('enter your secret word', '');

// let email;

// const fn = () => 5;

// let obj1 = {
//     name: 'vasia',
//     age: 24,
//     greeting: function () {
//         return 'hello';
//     },
//     // 'date of birth': '12/05/2022',
//     'date of birth': {
//         time: '20:00',
//         day: 12,
//         month: 5,
//         year: 2022
//     },
//     [word]: 'your secret word',
//     [() => word]: [ '1@mail.com', '2@mail.com' ],
//     [email]: 'null still working'
// };

// console.log(obj1.greeting());
// console.log(obj1);
// obj1.isDeveloper = true;
// console.log(obj1['date of birth'].time);


// console.log(obj1[word]);
// console.log(obj1['banana']);

// console.log(obj1[fn]);
// let name = 'vasia';

// const user = {
//     name: 'Max',
//     email: 'max223@mail.com',
//     password: 'qwertyuio',
//     logInfo: function() {
//         console.log(`user with name ${this.name}, has email: ${this.email} and password: ${this.password} `);
//         console.log(this);
//     }
// }

// user.logInfo();

// let fruit = {
//     name: 'banana',
//     price: 10
// }

// let fruit2 = fruit;

// console.log(fruit);
// console.log(fruit2);

// fruit2.name = 'orange';

// console.log(fruit);
// console.log(fruit2);

// let obj = new Object()

// function Object() {}

// function Car(brand = 'bmw', price = '1000', year = 2000) {
//     // this.brand = 'BMW',
//     // this.price = '5000$',
//     // this.year = 2015
//     this.brand = brand,
//     this.price = price,
//     this.year = year
// }

// let car = new Car('Audi', '12000', 2017);
// let opel = new Car('Opel', '4000', 2010);

// console.log(car);
// console.log(opel);

// let unknown = new Car();

// console.log(unknown);

// function Membership(name = 'user', title = 'standard', price = 50) {
//     function getDescriptionByMembership (membership) {
//         switch(membership) {
//             case 'admin':
//                 return 'membership for admins'
//             case 'standard':
//                 return 'standard membership with standard permission for site user' 
//             case 'premium':
//                 return 'premium membership for top user'
//             default:
//                 return 'basic membership with no permission for everyone'
            
//         }
//     }

//     this.name = name,
//     this.title = title,
//     this.price = price,
//     this.description = getDescriptionByMembership(title)

// }


// let user1 = new Membership('Max', 'standard', 50);

// console.log(user1);

// let user2 = new Membership('Olena', 'premium', 150);

// console.log(user2);

// let user3 = new Membership('Vasia', 'admin', 500);

// console.log(user3);


// let obj = {
//     name: 'vasia',
//     age: 23,
//     isDeveloper: true,
//     languages: ['ua', 'de', 'pl']
// }

// console.log(obj.toString());


// let str = prompt('enter your name');
// let str2 = "hello";
// let str3 = `hello`;

// console.log(str);
// console.log(str2);
// console.log(str3);


// console.log(str[1]);

// console.log('toUpperCase:', str.toLocaleLowerCase());

// console.log(str[0].toUpperCase());

// let name;

// for(let i = 0; i < str.length; i++) {
//     if(i == 0) {
//         name = str[i].toUpperCase();
//     } else {
//         name += str[i].toLowerCase();
//     }
// }
// console.log(name);

// let str = 'hello.';
// let str2 = 'world';
// console.log(str.lastIndexOf('l'));

// console.log(str.concat(', ', str2));

// console.log(str.includes('hell'));

// console.log(str.endsWith('.'));

// console.log(str.repeat(3));

// console.log(str.slice(1, -3));
// let newStr = str.substring(3);

// console.log(str);
// console.log(newStr);
// console.log(str.substring(3));

// let fruits = 'orange apple banana coconut cherry';

// console.log(fruits.split(' '));

// let str = 'Hello everyone, I hate learning JS';

// console.log(str);
// console.log(str.trimEnd());

// console.log(str.replace('hate', 'love'));

// martyn@mail.com -> 'word@word(61).word(5)'

// let mail = 'martyn@' + 'a'.repeat(70) + '.com';

// console.log(mail);

// martn@gmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmailgmail.com


