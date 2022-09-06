// 4. Then paste this
var oldx = 0,
    oldy = 0;

var newImg = $("img").attr("src");

$("img").detach();

$("body").append(
    '<img src="' + newImg + '" style="margin:0;">'
);

$("img")
    .off("click")
    .click(function (e) {
        var offset = $(this).offset();
        var x =
            Math.floor(((e.pageX - offset.left) / $(this).width()) * 10000) /
            100;
        var y =
            Math.floor(((e.pageY - offset.top) / $(this).height()) * 10000) /
            100;

        var properties = `top:${y - 4}%; left:${x - 5}%;`;
        $("#properties").text(properties);
        oldx = x;
        oldy = y;
    });
