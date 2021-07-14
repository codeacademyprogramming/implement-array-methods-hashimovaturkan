// function myFunc (a) {
//     console.log(a);
// }

// myFunc(100);

// function myFunc2 (a) {
//     console.log(a);
// }

// myFunc2('string');


// function myFunc3 (a) {
//     console.log(a);
// }

// myFunc3({});

// function myFunc4 (a) {
//     a(123);
// }

// myFunc4(
//     (a) => {
//         console.log(a);
//         console.log('hello world') 
//     }
// );
// myFunc4(function () {
//     console.log('hello world from function declaration');
// });

// function myFuncTest () {
//     console.log('i am a test');
// }

// function multiplyByTwo (a) {
//     a = 500;
//     console.log(a);
// }

// let num = 100;
// multiplyByTwo(num);
// console.log(num);

// function changeUsernameToDefault (userObject) {
//     userObject.firstname = 'DEFAULT';
//     console.log(userObject);
// }

// const user = {
//     firstname: 'Mubariz',
//     lastname: 'Mayilzade'
// }

// console.log(user); 

// changeUsernameToDefault(user);

// console.log(user);

// const a = 100;

// function test1 () {
//     const a = 5;
//     function test () {
//         console.log(a);
//     }
//     test(); /// Local Execution Context -> test1 Execution Context -> Global Execution Context 
// }

// test1(); /// Execution Context 








function multiplyNumbersInArrayByThree (array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] * 3);
    }
    return result;
}

const numbers = [1,2,3,4,5,6,7,8,9,10];
// console.log(multiplyNumbersInArrayByThree(numbers));

function multiplyNumbersInArrayByFive (array) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] * 5);
    }
    return result;
}

// console.log(multiplyNumbersInArrayByFive(numbers));



const multiplyByTwo = (a) => a * 2;
const multiplyByFive = (a) => a * 5;

loopAndModifyElementsInArray(numbers, multiplyByTwo);
loopAndModifyElementsInArray(numbers, multiplyByFive);
loopAndModifyElementsInArray(numbers, function (d) {
    return d * 100
});
loopAndModifyElementsInArray(numbers, (e) => e / 2);

function loopAndModifyElementsInArray (array, cb) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(cb(array[i]));
    }
    return result;
}















