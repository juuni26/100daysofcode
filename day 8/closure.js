// let interviewQuestion = function(job){
//     if(job==="gamer"){
//         return function(name){
//             console.log(`yo ${name}, what game do you play?`);
//         }    
//     }
//     else if(job==="doctor"){
//         return function(name){
//             console.log(`yo ${name}, what specialize do you take?`);
//         }
//     }
//     else {
//         return function(name){
//             console.log(`yo ${name}, what u dOink       ?`);
//         }
//     }
// }


let interviewQuestion = function(job){
    let additional = ", wow cool !"
    return function(name){                              //this inner function has acces to outer variable and parameter, its called closure.variable left stack after execution
        console.log(name+" is a "+ job + additional);
    }
};

interviewQuestion("arsitek")("hares");

let gamerInterview = interviewQuestion("gamer");
gamerInterview("tae-Yo");
