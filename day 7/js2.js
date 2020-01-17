//callback function 
//example 
let name = ["airy","mina","santi"];
let result=[];

//fn is the function that called by function tambahin()
function tambahin(arr,fn){

    for(let i=0;i<arr.length;i++){
        result[i] = fn(arr[i]);
    }
    return result;
}

function namae(name){
    return `${name}THEcoolkidz`
};

tambahin(name,namae);
console.log(result);
