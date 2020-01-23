//bind call apply

var john = {
    name: "john",
    age: 17,
    job:"detective",
    presentation: function(style,timeOfDay){
        if(style=="formal"){
            console.log("good "+ timeOfDay + ", Ladies And Gentlemen! I\'m "+ this.name + " and I\'m " + this.age + " years old," + " my job is a "+this.job);
        }
        else {
            console.log("good "+ timeOfDay + " my friends I\'m "+ this.name + " and " + this.age + " years old. I am a "+this.job+" goodluck have fun!");

        }
    }

}
let emily = {
    name: "emily",
    age : 18 ,
    job : "secretary"
};


john.presentation("informal","night");

//method borrowing with call
john.presentation.call(emily,"formal","afternoon");

//other alternative using apply (2 parameter only)
john.presentation.apply(emily,["friendly","afternoon"]);

//other alternative using bind , (it copies the variable returning function)
let johnFriendly =john.presentation.bind(john,"friendly");
johnFriendly("night");

let emilyPresentation = john.presentation.bind(emily);
emilyPresentation("formal","midnight");

// bind is returning function and need a variable, allow us presetting the argument.
// currying create function by using other function that already pre sett the argument.
// call is just calling and borrowing other methods.



//eg : presetting function with bind
let years = [1999,2004,1992,2000,2005];

function ageCalc(years,fnAge){
    let yearss = [];
    for(let i=0; i < years.length;i++){
        yearss.push(fnAge(years[i]));
    }
    return yearss;
}

function calculateAge(age){
    return 2020 - age;
}

function isFullAge(limit, el){
    return el >= limit ? "Aprroved":"still underAge";
}

let ages = ageCalc(years,calculateAge);
console.log(ages);

let ageIndo = ageCalc(ages,isFullAge.bind(this,17));
console.log(ageIndo);

//more advanced curry function eg :
function curry(f) { // curry(f) does the currying transform
    return function(a) {
      return function(b) {
        return f(a, b);
      };
    };
  }
  
  
  // usage
  function sum(a, b) {
    return a + b;
  }
  
  let curriedSum = curry(sum);
  
  alert( curriedSum(1)(4) ); // 5

 let  curriedSum1 = curriedSum(10);
 alert(curriedSum1(5)); //15 using preset function


//other eg
//https://javascript.info/currying-partials