var UIModule = (function () {
    var displayShows = function (shows) {
        console.log("from ui: ", shows);
        createElement(shows);
    };

    function createElement(data) {
        var div1 = $("<div>").attr('class', 'row');
        for (var i = 0; i <= 50; i++) {
            var div2 = $("<div>");
            div2.attr('class', 'div2')
            var a = $("<a>");
            a.text(data[i].name);
            a.attr('class', "headline")
            a.attr('href', './showInfo.html')
            var img = $("<img>", {
                src: data[i].image.medium,
            });
            img.attr('class', 'landingImg')
            div2.addClass("col-4");
            img.appendTo(div2);
            a.appendTo(div2);
            div2.appendTo(div1);
        }
        div1.appendTo($("section"));

        var h = $("#headline");
        h.text(data[1].name);
        var img1 = $("<img>", {
            src: data[1].image.original,
        });
        img1.attr('class', "showImg");
        img1.appendTo("#contImg");
        var seasons = $("<p>");
        seasons.text(data[1].premiered);
        seasons.appendTo("#contText");

        var det = $("#showDet");
        det.text(data[1].summary);

    }




    return {
        displayShows: displayShows
    };
})();