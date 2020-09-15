$(document).ready(function() {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
    })
})

var newBurger = {
    burger_name: $("#ca").val().trim(),
    devoured: 0

};
    $.ajax("/api/burgers", {
    type: "POST",
    data: newBurger, 
}).then(
    function () {
        console.log("created new burger");
        location.reload();
    }
)


$(".devour-btn").on("click", function () {
    var id = $(this).attr("data-burger")
    console.log(id); 
   $.ajax
})


// Export the database functions for the controller (catsController.js).
module.exports = burger;