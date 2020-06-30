var budgetController = (function() {
    var x = 23;

    var add = function(a) {
        return a + x;
    }

})();

var UIController = (function() {

    // code related to UI 

})();

var controller = (function(budgetCtrl, UICtrl) {


})(budgetController, UIController);