var uiController = (function(){
 
})();

var financeController=(function(){

})();

var appController=(function(uiController,financeController){

    var ctrlAddItem = function(){

        //1. Oruulah ugugliig delgetsees olj avna 
        console.log("1.9999");

        //2. Olj avsan ugugdluudee sanhuugiin controllert damjuulj tend hadgalna 

        //3. olj avsan ugugdluudee web deeree tohiroh hesegt ni gargana 

        //4. Tusviig tootsoolno 

        //5. Etssiin uldegdel, tootsoog delgetsend gargana 
    }
    
    document.querySelector('.add__btn').addEventListener('click',function(){
       
       
    });

    document.addEventListener('keypress',function(event){

        if(event.keyCode === 13 || event.which === 13) {
            
            console.log("enter pressed")
        }
        
    });


})(uiController,financeController);