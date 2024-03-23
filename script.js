"use strict";

// HOMEWORK JS-4


// დავალება #1                                                         
let array = [14, 150, 'css', null, 'javascript', 25];

let newArray = array.map( (item) => {
    if (typeof item === 'number'){
        return item * item;
    } else if (typeof item === 'string'){
        return item.toUpperCase();
    } return item;
})

console.log(newArray);


//დავალება #2
let info= 'good day';

let newInfo = info.slice(4,8)
console.log(newInfo.trim());


//დავალება #3
function fnstring1(string) {
    return string ;
}
let newString = fnstring1("hello")
console.log(newString.length);


//დავალება #4                                                          ???



//დავალება #5
let fruits = ['apple', 'mango', 'avocado','kiwi'];

fruits.splice(-2,1,'strawberry')
console.log(fruits);


//დავალება #6
let array1 = [5, 25, 89, 120, 36];

array1.push('javascript','python')
array1.unshift('html','css')
array1.shift()
array1.pop()
console.log(array1.length);

//დავალება #7
let fruits1 = ['ფორთოხალი', 'ბანანი', 'კივი'];

console.log(fruits1.length);
fruits1.push('ვაშლი','ანანასი')
fruits1.unshift('საზამთრო')
console.log(fruits1.length);
fruits1.splice(3,0,"მანგო")
fruits1.shift()
fruits1.pop()
console.log(fruits1.length);


//დავალება #8
let array3 =[1, 2, 3, 4, 5];

array3.splice(3,0,'a','b','c')
console.log(array3);


//დავალება #9
let  array2 = [12, 25, 3, 6, 8, 14, 7, 23];

let newArray2 = array2.map((el) => el / 3);
console.log(newArray2);

//დავალება #10
let array4 =  [15, 100, 25, 10, 36]

array4.splice(-2,1)
console.log(array4);


//დავალება #11
let array5 =  [15, 100, 3, 25, 10, 36]

array5.splice(2,1,"three")
console.log(array5);


//დავალება #12                                                    ???
let array6 =['hello1', 14,24, 'hello2']                          



//დავალება #13
let array7 = [1, 2, 3, 4, 5];
let sum = 0;

array7.forEach((item) => {
    sum += item;
})

console.log(sum);


//დავალება #14
let languages = ['html', 'css', 'javascript', 'python', 'php'];

let resultFilter = languages.filter(function(x){
    return x.length > 3 ;
})
console.log(resultFilter);


//დავალება #15
let words = ['Madrid', 'rome', 'Milan', 'berlin'];

let resultFilter1 = words.filter(function(x){
    return x.includes('m') || x.includes('M') ;
})
console.log(resultFilter1);


//დავალება #16                                                     ???
let link = 'https://google.com';


//დავალება #17
let array8 =  [-15, -100, -25, 10, -36].some((item) => item > 0);
console.log(array8);


//დავალება #18                                                      
let element = '12345';
let result1 = element.split("");

sum = 0;
for(let i of result1){
    sum += Number(i);
}

console.log(sum);


//დავალება #19                                                        ???
let nestedArray =[[0,1], [2,3], [4,5]].reduce((accumulator,currentValue) =>  {
    return accumulator.concat(currentValue);
}, []);


console.log(nestedArray);



 