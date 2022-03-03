'use strict';
if (4 == 9) {
    console.log('ok');
} else {
    console.log('ERROR');
}


// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log("to Much");
// } else {
//     console.log('Ok');
// }

// (num === 50) ? console.log('Ok') : console.log('Error');

const num = 51;

switch (num) {
    case 49:
        console.log('Wrong');
        break;
    case 100: 
        console.log('Wrong');
        break;
    case 50:
        console.log('Wright');
        break;
    default:
        console.log('Next time lucky');
        break;
}