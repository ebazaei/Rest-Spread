//Rest-Spread
//Rest-------------------------------------------------------
//The rest parameter (...) allows a function to treat an indefinite number of arguments as an array:
console.log("-------Rest-------");

function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  
  let res = sum(4, 9, 16, 25, 29, 100, 66, 77);

console.log(res)//326

//Example 2
//برنامه ای برای محاسبه مجموعه اعداد
console.log("-------Example 2-------");

function add(...input){
    let sumN = 0;
    for(let i of input){
        sumN += i;
    }
    return sumN;
}

console.log(add(1,2,3,4)); //10
console.log(add(3,4)); //7


//Old-arguments در گذشته برای ارسال مقادیر به یک فانکشن از روش زیر استفاده می شد
console.log("-------Old-arguments-------");


// function containsAll(arr){
//     for(let k=1 ; k < arguments.length ; k++){
//         let num = arguments[k];
//         if(arr.indexOf(num)=== -1){
//             return false;
//         }
//     }
//     return true;
// }

// let x=[2,4,6,7];
// console.log(containsAll(x,2,4,7));//true
// console.log(containsAll(x,6,4,9));//false



//ES6 - Rest کد بالا با روش جدید بازنویسی شده
console.log("-------ES6 - Rest-------");

function containsAll(arr, ...nums){
    for(let num of nums){
        if(arr.indexOf(num)=== -1){
            return false;
        }
    }
    return true;
}

let x=[2,4,6,7];
console.log(containsAll(x,2,4,7));//true
console.log(containsAll(x,6,4,9));//false

//Example 3
console.log("-------Example 3-------");

function magic(...nums){
    let sum = 0;
    nums.filter(n => n % 2 == 0).map(el => sum += el);
    return sum;
}
console.log(magic(1,2,3,4,5,6)) //12   6+4+2   سه عدد را میتوان تقسیم بر دو کرد




//Spread-------------------------------------------------------
console.log("-------Spread-------");
//انتقال عناصر یک آرایه به عنووان آرگومان به یک فانکشن
//Old Spread روش قدیمی
console.log("-------Old Spread-------");

function myFunction(w,x,y,z){
    console.log(w+x+y+z);
}
var args = [1,2,3];
myFunction.apply(null,args.concat(4)); //10


//ES6 Spread
console.log("-------ES6 Spread-------");
const myFunction2 = (W,X,Y,Z) => {
    console.log(W+X+Y+Z);
}
var args2 = [1,2,3];
myFunction2(...args2, 4); //10


//The Spread (...) Operator
console.log("-------Example 2-Operator-------");

const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];

console.log(year) //'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'May'


//The Spread (...) Operator
console.log("-------Example 3-------");

var dataFields = [1970, 0, 1]; //1 Jan 1970

var date = new Date(...dataFields);
console.log(date); //Thu Jan 01 1970 00:00:00 GMT+0100 (Central European Standard Time)