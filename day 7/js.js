//primitive vs object

//primitive contain the data itself
//object contain the reference from the data inside 
//example 

//primitive variable
let a = 20;
let b = a;
a = 40;
console.log(a); //40 
console.log(b); // 20 

//if object
let obj1 = {
    name: "john",
    age: 21
};
let obj2 =  obj1;
obj1.age =25;
console.log(obj1.age); //25 
console.log(obj2.age); //25 why ? because obj2 = obj1 , it refers to the same object

//primitive variable creates copy in function. it doesnt change the global variable while as parameter in function
//eg :

let umur = 19; 

function changeUmur(umur){
    umur = 35;
};
changeUmur(umur);
console.log(umur); // tetep 19

//kalo ga jadi parameter value berubah karena ga bikin copy variable
function changeUmur2(){
    umur = 99;
}
changeUmur2();
console.log(umur); //umur berubah jadi 99

//if we pass the obj in function its still changed the value, why ? because we passing the reference not the actual object
//example 

let oj = {
    age:17
};

function changeObject(objek){
    objek.age = 20;
}
changeObject(oj);
console.log(oj.age); // berubah jadi 20 , karena passing reference object jadi 20 


