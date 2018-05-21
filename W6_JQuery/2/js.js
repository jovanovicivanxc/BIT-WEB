$(function () {
    console.log("Hello, world!");

    $('li:first').css("border-bottom", "1px solid black");

    $('li').css("text-transform", "uppercase");

    $('li.active').css("color", "red");

    $('li:nth-of-type(3)').css("background-color", "lime");

    $('li:odd').hide().delay(500).fadeIn(1500);

});