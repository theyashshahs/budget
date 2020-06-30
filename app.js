var budgetController = (function() {
    var x = 23;

    var add = function(a) {
        return a + x;
    }

    return {
        publicTest: function(b) {
            console.log(add(b));
        }
    }
})();

var UIController = (function() {

    // code related to UI 

})();

var controller = (function(budgetCtrl, UICtrl) {

    var z = budgetCtrl.publicTest(5);

    return {
        publicController: function() {
            console.log(z);
        }
    }

})(budgetController, UIController);