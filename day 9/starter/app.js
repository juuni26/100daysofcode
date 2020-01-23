let budgetController = (function(){

    let Expense = function(id,description,value){
        this.id = id ,
        this.description = description,
        this.value = value
    };

    let Income = function(id,description,value){
        this.id = id ,
        this.description = description,
        this.value = value
    };
    
    let data = {    //put others var in one system
         allItems:{
             exp: [],
             inc: []
         },
         totals:{
            exp:0,
            inc:0
         }
    

    };

    return {
        addItem: function(type,des,val){
            let newItem,id;

            //create new ID
            if(data.allItems[type].length ===0){
                id = 0
            }
            else {
            id = data.allItems[type][data.allItems[type].length-1].id + 1;
            }
            //create new item based on type
            if(type==="exp"){
                newItem = new Expense(id,des,val);
            }
            else {
                newItem = new Income(id,des,val);

            }

            //push data to allItems[type]
            data.allItems[type].push(newItem);

            //return the new element
            return newItem;
            
        },
        testing: function(){
            console.log(data);
        }
    }
    
})();
budgetController.addItem


let uiController = (function(){

    let domStrings = {
        inputType: ".add__type",
        inputDesc:".add__description",
        inputValue:".add__value",
        inputBtn: ".add__btn"
    }

        return {
            getInput: function(){
                return {
                type : document.querySelector(domStrings.inputType).value,  // value= inc / exp
                description : document.querySelector(domStrings.inputDesc).value,
                value : document.querySelector(domStrings.inputValue).value
                }

                
            },
            getDomStrings: function(){
                return domStrings;
            }
        };
})();




//global app controller 
let controller = (function(budgeCtrl,uiCtrl){

    let setUpEventlisteners = function(){

        let DOM = uiCtrl.getDomStrings();
        document.querySelector(DOM.inputBtn).addEventListener("click",ctrlAddItem)
        document.addEventListener("keypress", function(event){
           if(event.keyCode === 13 || event.which === 13){
               console.log("its happening the enter")
               //add the item to list
               ctrlAddItem();
           }
   
        })


    }

    
    let ctrlAddItem = function(){
        let input, newItem;
        //1.get input data
         input = uiCtrl.getInput();
      

        //2. add the item to the budget controller
         newItem = budgeCtrl.addItem(input.type, input.description, input.value);

        //3. add the item to UI

        //4. calculate the budget

        //5. display the budget on the UI

         
    }
     
    return {
        init: function(){
            setUpEventlisteners();
        }
    }

})(budgetController,uiController);

controller.init();