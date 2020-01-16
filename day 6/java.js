// function constructor to create like class/ blue print

let Student = function (name,nim,score) {
this.name = name ,
this.nim = nim ,
this.score = score 
this.profile = function() {
    console.log(`hello i am ${this.name},My nim is ${this.nim}\nMyscore is ${this.score}`);
}
};

let junio = new Student("junio",210162222,100);

console.log(junio.name);
console.log(junio.nim);
console.log(junio.profile());

//inheritance using protoype 
// put method / properties that you want other inherit

Student.prototype.utang = function(){
    console.log("mereka punya utang ga ya ?")
};
junio.utang(); //see this junio instance inherit utang from student prototype 

//lets add more 
Student.prototype.alias = "superKidz9";
console.log(junio.alias);

//cant using this, because its back refer to globalContent already
Student.prototype.lastName = this.alias;
console.log(junio.lastName); //will result undefined


//create inherited object using object.create alternative way than function constructor

//create prototype that want to be inherited
let personProto = {
    lastName:"smitty webber jensen",
    profile: function(){console.log(this.name)}
}

let john = Object.create(personProto); //create object based on personProto inherited properties
console.log(john.lastName); //hasil : "smitty webber jensen"
john.name = "john"; //tambahin sendiri namenya
john.profile(); // hasil : "john"

//other way using second parameter Object.create

let jane = Object.create(personProto,{
    name : { value:"jane"}
})
console.log(jane.name); //"jane" 
console.log(jane.lastName); // "smitty webber .."
jane.profile(); // this.name = "jane" 

