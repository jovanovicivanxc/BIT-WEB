// var welcomeMessage = "Hello World!";
// console.log(welcomeMessage);

// function f(a, b) {
//     return a * b;
// }

// console.log(f(43, 42));

// _________________________________

// function info() {
//     console.log(navigator.platform);
//     console.log(navigator.appVersion);
//     console.log(navigator.vendor);

// }

// info();

// function isOnline() {
//     if (navigator.isOnline) {
//         console.log('online');
//     }
//     else {
//         console.log('offline');
//     }

// }

// isOnline();

// _____________________________________

// console.log(screen.width);
// console.log(screen.availWidth);

// console.log(screen.height);
// console.log(screen.availheight);

// _____________________________________________

function urlInfo() {
    console.log(location.urlInfo);
    console.log(location.hostname);
    console.log(location.protocol);
    console.log(location.search);
}

urlInfo();

function local() {
    localStorage.setItem('pera', '45454545');
    localStorage.setItem('zika', '4555585645');
    localStorage.setItem('pera3', '745454545');

}
local();

for (i = 0; i < localStorage.key.length; i++) {
    var item = local.localStorage.key[i];
    localStorage.getItem(item);
}


