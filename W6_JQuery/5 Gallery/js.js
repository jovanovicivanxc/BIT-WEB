$(function () {

    (function remClass() {
        $('img.selected').removeClass('selected');
        $('div.first').siblings().children().first().next().addClass('selected');

    })();

});