let uiController = (function(){
    let numb = 10;
    function sum(n){
        return n ;
    }
    return {
        publicSum(n){
            return sum(n) + numb;
        }
    }
})();

let dataController = (function(name){
let data= "something";
function printData(name){
    console.log(name);
}
return {
    publicPrint : function(name){
        printData(name);
    }
}
})("john");

let appController = (function(uiCtrl,dtCtrl){
    //something


})(uiController,dataController);