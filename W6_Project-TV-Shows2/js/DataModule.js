var DataModule = (function () {

    var fetchShows = function (x) {
        var request = $.ajax('http://api.tvmaze.com/shows');

        request.done(function (data) {
            x(data);
        })
    }
    return {
        fetchShows: fetchShows
    }

})();




