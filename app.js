var uiController = (function(){

    var DOMstrings ={
        inputType:".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        addButton: ".add__btn"
    }

    var x=100;

    return {
        getInput: function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstrings: function(){
            return DOMstrings;
        }
    }
     
 
})();

//sanhuutei ajillah controller
var financeController=(function(){
    
    var Income=function(id,description,value){
        this.id=id;
        this.description=description;
        this.value=value;
    }

    var Expense = function(id,description,value){
        this.id=id;
        this.description=description;
        this.value=value;
    }

    var data = {
        items: {
            inc: [],
            exp: []
        },
        totals: {
            inc: 0,
            exp: 0
        }
    };

    return {
        addItem: function(type,desc,val){
           
           var item, id;

           if(data.items[type].length===0) id=1;
           else {
               id = data.items[type][data.items[type].length-1].id + 1;
           }

           if(type==='inc'){
               item = new Income(id, desc, val);

           } else {
               item = new Expense(id, desc, val);
           }

            data.items[type].push(item);
        }
    }
})();

var appController=(function(uiController,financeController){

    var ctrlAddItem = function(){

        //1. Oruulah ugugliig delgetsees olj avna 
        var input = uiController.getInput();

        //2. Olj avsan ugugdluudee sanhuugiin controllert damjuulj tend hadgalna 
        financeController.addItem(input.type, input.description, input.value);
        
        //3. olj avsan ugugdluudee web deeree tohiroh hesegt ni gargana 
        //4. Tusviig tootsoolno 
        //5. Etssiin uldegdel, tootsoog delgetsend gargana 
    };

    var setupEventListeners = function() {

        var DOM = uiController.getDOMstrings();
         
        document.querySelector(DOM.addButton).addEventListener('click',function(){
            
            ctrlAddItem();
            //console.log(uiController.getInput().type);
            
            /*console.log(uiController.getInput().type);
            console.log(uiController.getInput().description);
            console.log(uiController.getInput().value);*/
            
         });
     
         document.addEventListener('keypress',function(event){
             if(event.keyCode === 13 || event.which === 13) {
                 console.log("enter pressed");
             }
         });
    }

    
    return {
        init: function(){
            console.log("Application started...");
            setupEventListeners();
        }
    }

})(uiController,financeController);

appController.init();