// var colors=["pink","orange","green"];
// listOf(colors)
// function listOf(arr){
//     for(var i=0; i<arr.length; i++){
//     if(arr[i]=="pink"){
//         console.log("this is pink colour")
//     }
//     else{
//         console.log("this is jana")
//     }
//     }
// }



// function listArrayItems(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] == 'red') {
//             console.log(i*100, "tomato!")
//         } else {
//             console.log(i*100, arr[i])
//         }
//     }
// }

// var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
// listArrayItems(colors);



// function letterfinder(a,b){
//     for(var i=0; i<a.length; i++){
//         if(a[i]==b){
//             console.log("count of t is "+b+"at "+i)
//         }
//         else{
//             console.log("there is no count in words")
//         }
//     }
// }

// letterfinder("attack","t")

// function letterFinder(word,match){
//     for(var i=0; i<word.length; i++){
//         if(word[i]==match){
//             console.log("Found the",match,"at",i);
//         }
//         else{
//             console.log("---No match found at",i)
//         }

//     }
// }
// letterFinder("test","t")



// var jann={
//     name:"jana",
//     age:20,
//     clg:"SVCE",
//     pincode:202621
// }


// console.log(jann)
// jann.window=30
// console.log(jann)

// var names={}

// names["person"]="jana";
// names["age"]=24;
// names.age=25;
// names["clg"]="SVCE";
// names["salary"]=2423;
// console.log(names)
// names["login"]="JANARRS";
// console.log(names);


// var person=["names","age","salary","job","role"]

// var names={
//     names:"jana",
//     age:34,
//     salary:23243,
//     job:"Capgemini",
//     role:"Data Enginner"
// }
// for(var i=0; i<=person.length; i++){
//     console.log(names[person[i]])
// }



// var names=[]
// names.push("jana");
// names.push("sathish");
// names.pop()
// console.log(names)



// function arrycalling(one,two,three,four,five){
//     var nam=[]
//     nam.push(one);
//     nam.push(two);
//     nam.push(three);
//     nam.push(four);
//     nam.pop(five);
//     // console.log(nam)
//     return nam;
// }


// var names=["jana","ksmdk",23,45,"laksl"]
// console.log(names.length);
// console.log(names[2]);
// console.log(names[7]);
// for(var i=0; i<names.length; i++){
//     console.log(names[i])
// }


// var names1="JanardhananRS";
// console.log(names1.length);
// console.log(names1[2]);
// console.log(names1[7]);
// for(var i=0; i<names1.length; i++){
//     console.log(names1[i])
// }

// 
// var clothes=[]
// clothes.push("jersy");
// clothes.push("shorts");
// clothes.push("shirt");
// clothes.push("pant");
// clothes.pop("inner wear");
// clothes.push("jack");
// console.log(clothes[2]);
// console.log(clothes);


// var favCar={
//     color:"blue",

// }

// console.log(favCar);


// var car = {};​

// car.color = "red";​

// car.turnKey = function() { ​
//   console.log('engine running'); ​
// }
// console.log(car)

// var car = {};
// car.mileage = 98765;
// car.color = "red";
// console.log(car);
// car.turnKey = function(j) {
//     console.log("The engine is running")
// }
// console.log(car);


// var car = {};
// car.mileage = 98765;
// car.color = "red";
// console.log(car);
// car.turnTheKey = function() {
//     console.log("The engine is running")
// }
// car.lightsOn = function() {
//     console.log("The lights are on.")
// }
// console.log(car);
// car.turnTheKey();
// car.lightsOn()


// var dog = {
//     color: "brown",
//     height: 30,
//     length: 60
// };
// dog["type"] = "corgi";
// console.log(dog)


// var clothes = [];
// clothes.push('gray t-shirt');
// clothes.push('green scarf');
// clothes.pop();
// clothes.push('slippers');
// clothes.pop();
// clothes.push('boots');
// clothes.push('old jeans');
// console.log(clothes)


// var result = "Hello";
// console.log(result.indexOf("l"))

// var food = [];
// food.push('Chocolate');
// food.push('Ice cream');
// food.push('Donut');

// console.log(food[1])

// var item = [];

// console.log(item)

// console.log(q+w);
// console.log("This is jana");

// try{
//     throw new ReferenceError();
// }catch(err){
//     console.log(err);
//     console.log("the program is keep on running");
// }
// console.log("the program is resolved")







// //reference error

// console.log(n)

// //type error

// "hello".pop();

// //syntax error

// var a "janardhanan";
// console.log(a);

// //Range error

// (10).toString(100);





// 



// function addTwoNums(a,b) {
//     try {
//         if(typeof(a) != 'number') {
//             throw new ReferenceError('the first argument is not a number')
//         } else if (typeof(b) != 'number') {
//             throw new ReferenceError('the second argument is not a number')
//         } else {
//             console.log(a + b)
//         }
//     } catch(err) {
//         console.log("Error!", err)
//     }
// }
// addTwoNums(5, "5")
// console.log("It still works")




// 




// 


// var result = null;
// console.log(result);

// var a=10;
// var b=23;
// try {
//     console.log(a+b);
// } catch (err) {
//    console.log("goobye") 
// }




// var x;

// if(x === null) {
//   console.log("null");
// } else if(x === undefined) {
//   console.log("undefined");
// } else {
//   console.log("ok");
// }


// try{
// // throw new Error();
// console.log("Hello");
// }catch(err){
//     console.log("jana")
// }



// function add(a, b) {
//     console.log(a + b)​
//   }​

//   add(3, "4");


// var str = "Hello";
// console.log(str.match("jello"));


try {
    Number(5).toPrecision(300)
    } catch(e) {
    console.log("There was an error")
    }