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



//function
// const data ={
//     name:"jana",
//     age:34,
//     getAnotherName:function(){
//         console.log('Rangineni');
//     }
// }
// const a=10; //below function and here variable are same as like the data will be binded
// const callMe=function (){
//     console.log('Hello');
// }

// console.log(callMe,data);
// console.log(data.getAnotherName);
// console.log(data['name']);







//if u want to combine the data inside the object

// const family={
//     names:"Kokila",
//     age:34,
//     getData:function(){
        
//         console.log("My name is "+family.names+" and my age is "+family.age);
//     }

// }
// family.getData();//calling the method data inside the object
// console.log(family['age']);//using the projection data 
// console.log(family.names);//getting the . notation process




//Another way of creating object 

// function data(){
//     return{
//     firstname:"Janardhanan",
//     lastName:"Rangineni",
//     age:34,
//     gender:"male",
//     allData:function(){
//   console.log(this.firstname+" "+this.lastName+" "+this.age+" "+this.gender);
//     }
// }
// }

// const getData=data();
// getData.allData()


//Creating objects inside the list

// const list=[
//     {
//         name:"jana",
//         age:34,
//         gender:"male",
//         getAllData:function(){
//         console.log(this.name+" "+this.age+" "+this.gender);
//         }
//     }
// ]

// const getData=list[0];
// getData.getAllData();




//Excludig the object data inside the variable

// const data={
//     firstName:"janardhanan",
//     lastName:"Rangineni",
//     gender:'Male',
//     allData:function(){
//         console.log(this.firstName+" "+this.lastName+" "+this.gender);
//     }

// }

// const x=data.allData;
// // console.log(x);

// console.log(x,data.allData);

// data.allData();
// x();// wrong way of calling object



//Use strict
//using strict mode will enable the function as strictly it doesn't enable the window global function



// const data=function(){
//     'use strict'
//     console.log(this);
// }
// data();//undefined 

// const x={
//     name:"jana",
//     getdata:function(){
//         console.log(this);
//     }
// }

// x.getdata();
// const s=x.name;
// console.log(s);



//in-built data types
// const sd="jana";
// const a= new String("jana1");
// console.log(sd);
// console.log(a);

// const b=new Boolean(1);
// console.log(b);

// const c= new Number(56);
// console.log(c);


/*
Learn this Objects
String--primitve
number-primitive
boolean-primitive
bigint-primitve
array-compound data type -we can align this data
object-compound data type
*/
//Learning object Methods



//Mapping the object data inside the another functions 
// const engineType={
//     diesel:"No",
//     Petrol:"YES"
// }

// const car={
//     name:"Audi",
//     model:"A4",
//     color:"red",
//     state:"ON",
//     Tank:"Petrol",
//     startCar:function(){
//      this.state="Runnning"
//      console.log(this.state);
//     },
//     stopCars:function(){
//         this.state="OFF"
//         console.log(this.state);
//     },
//     mapData(){
//         const g=this.Tank;
//       console.log(engineType[g]);
//     //   return engineType[this.Tank];
//     }

// }

// car.startCar();
// car.stopCars();
// car.mapData();




//Easy way of creating the objects and doing the functionality inside the object

// const plate={
//     width:100,
//     height:200,
//     calcArea(){
// console.log(this.width*this.height+'cm');  
//   }

// }
// plate.calcArea();


// const calcMyAge={
//     born: new Date('1996-02-17'),
//     myage(){
//         const todayDate= new Date();
//         const overAllAge=todayDate-this.born
//         console.log(overAllAge/(365*24*60*60*1000));
//     }
// }
// calcMyAge.myage();





//Learning Strings
// const a='jana';
// console.log(a.length);

// //i want to split each character in an array itself
// const b=[];
// for(i=0; i<a.length; i++){
//     console.log(a[i]);
//     // i am pushing inside the array iteself
//     b.push(a[i]);
    
// }
// console.log(b);

// //we can break the above code using simple thing as the split method

// const c=a.split('');
// console.log(c);









// String length
// String slice()
// String substring()
// String substr()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charAt()
// String charCodeAt()
// String split()

// //MyCode
// const a='Jana';
// console.log(a.length); //4
// console.log(a.substring(2));//na
// console.log(a.substr(1,3));//ana
// console.log(a.replaceAll('a','n'));//Jnnn
// console.log(a.toLowerCase());//jana
// console.log(a.toUpperCase());//JANA
// console.log(a.concat("rdhanan"));//Janardhanan
// console.log(a.charAt(3));
// console.log(a.split(''));
// console.log(a.charCodeAt('a'));
// console.log(a.slice());
// console.log(a.replace('k','j'));
// const b='Ja na rdhanan'
// console.log(b.trim(''));


// slice(start, end)
// substring(start, end)
// substr(start, length)

// let names="Jana,Logu,Naveen";
// //Length
// console.log(names.length);
// let name='Jana';
// console.log(name.length);

// //Slice(start,end)
// console.log(names.slice(5,9));
// // substring(start, end)
// console.log(names.substring(0,10));
// // substr(start, length)
// console.log(names.substr(5,4));





















//Task -5 Youtube strict mode and Strings

//If u are using the strict mode it will avoid the code changes as per the real time

// 'use strict'

// function abc(){
//     console.log(this);
// }

// const a={
//     name4:"jana",
//     B:abc
// }
// abc();
// a.B();



//Using the without variable.

// x=1;
// const a={
//   abc(){
//     console.log(x);// here i will give ans 1
//   }
// }
// a.abc();


// 'use strict'
// x=1;
// const b={
//   abc(){
//     console.log(x);// using strict mode it will throw the error
//   }
// }
// b.abc();


// var x=320;

// const s={
   
//     abc(){
//         x=90;
//         console.log(x);//90 ans
//     }
// }

// s.abc();



// 'use strict'

// var x=320;

// const s={
   
//     abc(){
//         x=90;
//         console.log(x);//90 ans
//     }
// }

// s.abc();
// console.log(x);//90

// 'use strict'
// function abc(){
//     x=90;
//     console.log(x);
// }
// abc();//Ref error
// console.log(x);


'use strict'
var x;
function abc(){
    x=90;
    console.log(x);
}
console.log(x);//undefined
abc();//Ref error
console.log(x);//90




