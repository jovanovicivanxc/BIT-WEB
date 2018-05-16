alert("Greeting!");

var input = prompt("What is the weather like?");

var choice = confirm("We will submit this answer now! " + input);

if (choice == true) {
    alert("You pressed OK!");
}