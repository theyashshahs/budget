// Budget Controller
var budgetController = (function() {
    
})();


// UI Controller
var UIController = (function() {

    // code related to UI 

})();

// App Controller
var controller = (function(budgetCtrl, UICtrl) {

    document.querySelector('.add__btn').addEventListener('click', function() {
        console.log('You find it congrats');
    });

    document.addEventListener('keypress', function(event) {
        console.log(event);
    });

})(budgetController, UIController);