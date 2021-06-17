// Task 1

let str = 'aaa@bbb@ccc';
console.log(str.replace(/@/g, '!'));

// Task 2

let day = '2025-12-31';
let arr1 = day.split('-');
let newDay = arr1[2] + '/' + arr1[1] + '/' + arr1[0];
console.log(newDay);


// Task 3

let str1 = 'Я учу javascript!'
console.log(str1.substr(0, 1));

let str2 = 'Я учу javascript!'
console.log(str2.substring(0, 1));

let str3 = 'Я учу javascript!'
console.log(str3.slice(0, 1));

// Task 4

let arr = [4, 2, 5, 19, 13, 0, 10],
    result = 0;
for (let i = 0; i < arr.length; i++) {
    result += Math.pow(arr[i], 3);
}
console.log(Math.sqrt(result));

// Task 5

let a = 5,
    b = 6,
    c = Math.abs(a - b);
console.log(c);

// Task 6

let date = new Date();

function zero(num) {
    if (num > 0 && num < 10) {
        return '0' + num;
    } else {
        return num;
    };
};
console.log(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + zero(date.getDate()) + '.' + zero(date.getMonth() + 1) + '.' + date.getFullYear());

// Task 7 

let string = 'aa aba abba abbba abca abea';
console.log(string.replace(/ab.a/g, ''))


// Task 8 
// Task 9 
// Task 10