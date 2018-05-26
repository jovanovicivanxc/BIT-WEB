var UIModule = (function () {
    var displayShows = function (shows) {
        console.log("from ui: ", shows);
        createElement(shows);
    };

    function createElement(data) {
        var div1 = $("<div>").attr('class', 'row');
        for (var i = 0; i <= 50; i++) {
            var div2 = $("<div>");
            var p = $("<p>");
            p.text(data[i].name);
            p.attr('class', "headline")
            var img = $("<img>", {
                src: data[i].image.medium,
            })
            div2.addClass("col-4");
            img.appendTo(div2);
            p.appendTo(div2);
            div2.appendTo(div1);
        }
        div1.appendTo($("#container"));
    }

    return {
        displayShows: displayShows
    };
})();