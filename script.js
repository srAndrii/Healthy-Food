'use strict';

// function first() {
    
    
// }
// function second() {
    
// }
// function learnjs(lang, callback) {
//     console.log(`I studie:${lang}`);
//     callback();
// }

// function done() {
//     console.log('I am done');
// }

// learnjs('javas', done);

// const options = {
//     name: 'test',
//     width: 1024,
//     heigh: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {
//         console.log('Test');
//     }
// };

// options.makeTest();

// const { border, bg } = options.colors;
// console.log(border);

// console.log(options.name);

// delete options.name;
// console.log(options);

// let counter = 0;

// for (let i in options) {
//     if (typeof (options[i]) === 'object') {
//         for (let key in options[i]) {
//             console.log(`Свойство ${key} имеет значение ${options[i][key]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${i} имеет значение ${options[i]}`);
//         counter++;
//     }
    
// }
// console.log(counter);


// console.log(Object.keys(options).length);






// const arr = [1, 2, 13, 28, 6, 8];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

// // arr[99] = 0;
// // console.log(arr.length);

// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// })

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt('', '');
// const products = str.split(', ');
// console.log(products.join('; '));




// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;

// copy.a = 10;

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
        
//     }
//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };
// const newNumb = copy(numbers);

// newNumb.a = 10;
// console.log(newNumb);


// const add = {
//     d: 17,
//     e: 20
// };
// const clone = Object.assign({}, add);
// clone.d = 20;
// console.log(add);
// console.log(clone);

// const oldArr = ['a', 'b', 'c'];
// const newArr = oldArr.slice();

// newArr[1] = 'dfdf';
// console.log(newArr);
// console.log(oldArr);

// const video = ['youtube', 'vimeo', 'rutobe'],
//     blogs = ['wordpress', 'livejornall', 'bloger'],
//     internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
      
// const num = [2, 5, 7];
// log(...num);


// const array = ['a', 'b'];

// const newArra = [...array];

// const q = {
//     one: 1,
//     two:2
// };

// const newObj = {...q};


const solder = {
    health: 400,
    armor: 100,
    sayHallo: function () {
        console.log('Hi');
    }
};

const john = Object.create(solder);

// const john = {
//     health: 100

// };

// john.__proto__ = solder;

Object.setPrototypeOf(john, solder);
// console.log(john.armor);
john.sayHallo();
