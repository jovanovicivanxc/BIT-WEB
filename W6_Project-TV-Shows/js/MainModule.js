var mainModule = (function (UIModule, DataModule) {
    function showReceivedHandler(shows) {
        UIModule.displayShows(shows);
    }

    function run() {
        DataModule.fetchShows(showReceivedHandler);
    }

    return {
        init: run
    }
})(UIModule, DataModule);

mainModule.init();