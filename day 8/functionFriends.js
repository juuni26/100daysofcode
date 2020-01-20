//function returning function 
//this amazing

let interviewQuestion = function(job){
    if(job==="gamer"){
        return function(name){
            console.log(`yo ${name}, what game do you play?`);
        }
    }
    else if(job==="doctor"){
        return function(name){
            console.log(`yo ${name}, what specialize do you take?`);
        }
    }
    else {
        return function(name){
            console.log(`yo ${name}, what u dOink       ?`);
        }
    }
}

let gamerQuestion = interviewQuestion("gamer"); //this will  make gameQuestion to be function anonymous that have parameter name;
gamerQuestion("jun");

let doctorQuestion = interviewQuestion("doctor");
doctorQuestion("yoona");

let gabutQuesetion = interviewQuestion("gabutMan");
gabutQuesetion("fulan");

gamerQuestion("maul");
gamerQuestion("enool");
gabutQuesetion("daffu");

//without saving in variable
interviewQuestion("gamer")("faker"); //this interviewquestion(gamer)will return function and then execute faker parameter
interviewQuestion("doctor")("dr.kim");

//gabut ---
let jun =  document.querySelector(".doctor");
jun.style.color = "red";
jun.style.fontSize ="24px";
jun.style.textAlign = "center";

let css = '.doctor:hover{ background-color: blue}';
let style = document.createElement('style');

if (style.styleSheet) {
    style.styleSheet.cssText = css;
} else {    
    style.appendChild(document.createTextNode(css));
}

jun.appendChild(style);

//immediately invoked function expression  (IIFE) 
// declare and calling fast function and secure data privacy

(function(){
    let random = Math.random() *10;
    if (random>=5){
        console.log("you are winner !");
    }
    else {
        console.log("you are loser");
    }
}
)();

//using parameter 
(function(luckRate){
    let random = Math.random() *10;
    if (random>=5-luckRate){
        console.log("you are winner !");
    }
    else {
        console.log("you are loser");
    }

})(5); //dont forget calling it using parameter. 

// console.log(random); //errorr its like private in java . gone after function call