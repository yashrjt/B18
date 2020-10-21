//this --global window object
console.log(this);

function emp(ename){
console.log("emp -> name",this)

}

emp('John');


//es5 way
// let employee={
//     empname:'john',
//     empSalary:function(){
//         console.log("emp -> name",this.empname)

//     }
// }

// employee.empSalary();


//es6 way
let employee1={
    empname:'john',
    empSalary:()=>{
        console.log("emp -> name",this)
        console.log("emp -> name",this.empname)

    }
}

employee1.empSalary();


//es5 constructor function

function EmpService(name){
    // let self=this;
    this.name=name;
    this.addEmp=function(){
            console.log(this);
           // console.log(name);
    }

    // this.addEmpAsync=function(){
    //         setTimeout(function(){
    //             console.log('self' , self);
    //         },5000)
    // }

    this.addEmpAsync=function(){
        setTimeout(()=>{
            console.log(this);
        },5000)
}
}


let s=new EmpService('kelly');
s.addEmp();
s.addEmpAsync();




//es6 way 

// class EmpServiceCopy{

//     constructor(name){
//         this.name=name;
//     }
//     addEmpCopy(){
//         // console.log(this);
//         console.log(this.name);
//     }   
// }

// let s1=new EmpServiceCopy('helen');

// s1.addEmpCopy();


//functional
//procedural
//object oriented programming


