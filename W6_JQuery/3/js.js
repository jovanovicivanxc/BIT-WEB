$(function () {

    var a = ['http://r.ddmcdn.com/s_f/o_1/APL/uploads/2015/07/cecil-AP463227356214-1000x400.jpg',
        'https://static.boredpanda.com/blog/wp-content/uploads/2016/09/funny-animals-with-front-eyes-8-57da51c6ad9f3__700.jpg',
        'https://static.boredpanda.com/blog/wp-content/uploads/2016/09/funny-animals-with-front-eyes-2-57da51b9cc36d__700.jpg',
        'https://static.boredpanda.com/blog/wp-content/uploads/2016/09/funny-animals-with-front-eyes-57da52ea2d563__700.jpg',
        'https://static.boredpanda.com/blog/wp-content/uploads/2016/09/funny-animals-with-front-eyes-15-57da61d734a44__700.jpg',
        'https://static.boredpanda.com/blog/wp-content/uploads/2016/09/funny-animals-with-front-eyes-6-57da51c321477__700.jpg']


    var ind = 1;
    for (i = 0; i < a.length; i++) {
        var b = $('<img>').attr("src", a[i]).attr("width", Math.random() * 500);
        $("p").after(b);

        if (b.attr('width') < 200 && ind < 2) {
            b.css("border", "6px solid green");
            ind++;
        }
        else {
        }
    }

    var headline = $("<h1>Animals</h1>");
    $('p').after(headline);



});