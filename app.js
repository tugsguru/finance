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

var financeController=(function(){

})();

var appController=(function(uiController,financeController){

    var ctrlAddItem = function(){

        //1. Oruulah ugugliig delgetsees olj avna 
        console.log("898989");
        //2. Olj avsan ugugdluudee sanhuugiin controllert damjuulj tend hadgalna 
        //3. olj avsan ugugdluudee web deeree tohiroh hesegt ni gargana 
        //4. Tusviig tootsoolno 
        //5. Etssiin uldegdel, tootsoog delgetsend gargana 
    }
    

    var setupEventListeners = function() {

        var DOM = uiController.getDOMstrings();
         
        document.querySelector(DOM.addButton).addEventListener('click',function(){
            //console.log(uiController.getInput().type);
            console.log(uiController.getInput().type);
            console.log(uiController.getInput().description);
            console.log(uiController.getInput().value);
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