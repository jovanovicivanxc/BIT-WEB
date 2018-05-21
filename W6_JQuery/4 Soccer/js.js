$('body').on('click', function (event) {
    $('#player').css("left", event.pageX - 50);
    $('#player').css("top", event.pageY - 50);
});

$('#button').click(function () {
    $('body').off("click");
});







// document.body.addEventListener("click", myFunction);
// function myFunction(e) {
//     var p = document.querySelector('#player');
//     var x = e.clientX;
//     var y = e.clientY;
//     p.style.left = x - 50 + "px";
//     p.style.top = y - 50 + "px";
// }

// document.querySelector("#button").addEventListener("click", removeHandler);
// function removeHandler() {
//     document.body.removeEventListener("click", myFunction);
// }
