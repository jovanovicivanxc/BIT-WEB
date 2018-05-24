var input = document.querySelector("#searchField");

function myFunc() {

    var hostName = 'https://api.github.com/search/users?q=' + input.value;
    var request = $.ajax(hostName)

    request.done(function (data) {
        console.log(data.items[0].login);
        createElement(data);
    });

    function createElement(data) {
        for (var i = 0; i < data.items.length; i++) {
            var img = $("<img>", {
                src: data.items[i].avatar_url,
                width: 300,
            })
                .appendTo($("div"));
            var txt = $("<span></span>").text(data.items[i].login)
                .appendTo($("div"));

        }

    }

};

