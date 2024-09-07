// document.getElementById("search").addEventListener("focus", function() {
//     this.classList.add("focused");
// });

document.getElementById("first").addEventListener("click", function() {
    var destination = document.getElementById("search").value;
    if (destination.trim() === "") {
        alert("Please fill in the 'Where to?' field");
    } else {
        // If destination is filled, proceed with your logic
        // For example, you can redirect the user to another page or perform other actions
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var input = document.getElementById("search");
    input.focus();
    input.setSelectionRange(0, 0);
});

