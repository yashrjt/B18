// document.querySelector('.button').addEventListener('click',function(){
//     alert('you clicked the button')
// })

//Interpreted language
//Nodejs-environment to run javascript code on the server
//hoisted to top

// strict mode
var x,y,arr,date,emp,staffName;


var x='John';
x=null;
var y;



console.log(y);

//undefined--variable with no value
//not defined-variable not declared

//primitive datatypes string,boolean,null,number,undefined
//non primitive datatypes objects,arrays,date

//heterogenous

var arr=[1,2,3,'David',true,null];

var date=new Date();

//object literal
var emp={
    empid:101,
    empname:'kelly'
};


//hoisting

console.log(staffName);
var staffName='Andrew';
console.log(staffName);

//truthy values--true,1,[data],{name:'lilly'}
//falsy values--false,0,null,undefined,NAN

var truthyVal=[];
if(truthyVal){
    console.log('truthy value')
}
else{
    console.log('falsy value')
}

//comapre two variables ==(loose equality ) vs ===(strict equality )

//== type coercion

console.log(1==1);
console.log(1===1);


console.log(1==true);
console.log(1===true);


//functions

function addNumbers(a,b){
    return a+b;
}

//anonymous function
var addNumbersCopy=function (a,b){
    return a+b;
}


var total=addNumbersCopy(10,20);
console.log("total", total)

//In JS a function can return another function

//scopes-global,local,lexical scope

//closure 
function getSalary(){
    // var baseSalary;
    // console.log("getSalary -> baseSalary", baseSalary)
     
    var baseSalary=5000;
       //lexical scope
    return function(bonus){
        return baseSalary+bonus;
    }
}



var RusselSalary=getSalary();

console.log(RusselSalary(1000));

var HelenSalary=getSalary();

console.log(HelenSalary(2000));

//es6 (ecmascript) features

//let creates a block level scope
//const

// const con=10;
// con=101;


if(true){
        let j='Truthy value'
        
}
//console.log("j", j)

//arrow function


let anonymous=function(){
    console.log('this is a anonymous function')
}


// function(){
//    return 10;
// }

let anonymouscopy=()=>  10;


//template literal

let company='Apolis';
console.log('Hello welcome to '+company)
console.log(`Hello welcome to ${company}`);


//spread operator
let originalArray=[10,20,30];

let newArray=[0,...originalArray,40,50];
console.log("newArray", newArray)


let trainee={
    name:'George'
}

let traineeNew={...trainee,course:'Javascript'}

console.log("traineeNew", traineeNew);

console.log(traineeNew.name);

//object destructuring
 
let {name}=traineeNew;
console.log("name", name)

//promise object


setTimeout(()=>{
console.log('i am called after 3 seconds')
},3000);


console.log(' i am present after settimeout');

// let promise=new Promise((resolved,rejected)=>{
//     setTimeout(()=>{
//         resolved('call success')
//     },5000);
// })


promise
.then((response)=>{
console.log("response", response)
})
.catch((err)=>{
console.log("err", err)
})
