// Task1-Youtube


// console.log("jana is learning Javascript");
// var a="janardhanan";
// console.log(a);
// var b=10;
// console.log(b);
// var c=true;
// console.log(c);
// //Objects
// var d={
//     name:"jana",
//     age:27,
//     Hobbies:"Running"
// }
// console.log(d);

// //Array
// var e=[1,2,3,4,"jana"];
// console.log(e);
// //Undefined
// var f;
// console.log(f);

// //Var let Const

// var a1=10;
// let a2=20;
// const a3=30;

// a1=90; //this thing will change
// a2=40; // this data also will change
// // a3=80;
// console.log(a1);
// console.log(a2);
// // console.log(a3); //Uncaught TypeError: Assignment to constant variable.


// //Control flow statement

// var b1="ukt";
// var b2="trl";
// if(b1==="ukt"){
//     console.log("Bus");
// }else if(b1==="trl"){
//     console.log("Train");
// }else{
//     console.log("Bus or Train");
// }

// for(i=0; i<=9; i++){
//     console.log(i);
// }
// console.log("------------------");
// var s=2;
// while(s<10){
//     console.log(s);
//     s++
// }


// console.log("----------------");
// var f1=4
// do{
//     console.log("Do is executed");
// }while(f1>10){
//     console.log(f1);
//     f1++
// }


// //Array Task
// for(i=0; i<e.length; i++){
//     console.log(e[i]);
// }



//----------------------------------------










//Task-2 YouTube

//If-Else and the Switch Statement
//  var a="Trl";
//  if(a==="Trl"){
//     console.log("Train")
//  }else if(a==='ukt'){
//     console.log("Bus");
//  }else{
//     console.log("Bus or Train")
//  }

//  switch(a){
//     case 'Trl':
//         console.log("train");
//         break;
//     case 'ukt':
//         console.log("bus");
//         break;
//     default:
//         console.log("Bus or Train");

//  }



//Functions in Js

//Normal Function
// function adding(a,b){
//     console.log(a+b);
// }
// adding(2,3);

// adding(3,4);



//Arrow Function
// const add=(a,b)=> a+b;

// const x=add(2,2);

// console.log(x);





//var let const

// var a=10;
// let b=9;
// const c=8;

// //var
// var a=99; //{var can re-declear and reassign}
// a=100;
// console.log(a);

// //let 
// // let b=200; //Error: cannot reassign the let
// b=23;
// console.log(b);//{Let can be re-declear}

// //const
// // const c=23;//Error:{We cannot re-declear and reassign}
// // c=900;
// console.log(c);





//Global Scope and Local Scope

//Global scope can be executed the anywhere in the function iteself
// var a=1;

// if(true){
//     console.log(a);
// }

// function data(b){
//     console.log(a+b);

// }
// data(6);

//Global Scope and data will be re-Declear inside the function but also it will execute

// console.log('-----------------------');
// var n=1;
// function adds(m){
//     n=10;
//     console.log(m+n);
// }
// adds(10);
// if(true){
//     console.log(n);
// }


// const c=[1,2,3,4,5,6];
// var val=c.forEach((x)=>{ console.log(x*2);})













//Task-3 youtube videos



//Expression 

// let a=0;

// a=a+1; //a+1 IS CALLED EXPRESSION
// a++ //is is also called expression
// console.log(a);


//typeof

// console.log(typeof'9');//String
// console.log(typeof 1);//Number
// console.log(typeof true);//boolean
// console.log(typeof null);//object
// console.log(typeof []);//object
// console.log(typeof {});//object
// console.log(typeof Symbol(5));//symbol
// console.log(typeof 2n);//bigint
// console.log(typeof undefined);//undefined
// console.log(typeof NaN);//number


//type conversion or type coherison

// var a=1+'1';
// console.log(a);
// console.log(typeof a);//string
// console.log(2-'1');//1
// console.log(2*'1');//2
// //+ operator can convert the string value as cocatination
// //- Operator can convert the string value as number if it's like a name means convert to NaN
// console.log(2-'jana');//NaN

// var b=null;
// var c=undefined;
// console.log(b);;
// console.log(c);






//infinity
// var m=1;
// var t=m+Infinity;
// var w=m-Infinity;
// console.log(t);
// console.log(w);



//making a string as number explicitly type corrision happens
// var a=1;
// var b='1';

// var c=a+(b*1);//type conversion
// var e=Number(b)+a;//Explicitly type converion
// console.log(c);
// console.log(e);








//Task-4 Object_properties and methods and this
const data ={
    name:"jana",
    age:34
}


//function
const callMe=function (){
    console.log('Hello');
}

console.log(callMe,data);