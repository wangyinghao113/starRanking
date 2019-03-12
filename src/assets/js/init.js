(function () {
    var funn = function () {
        var w = window.innerWidth;
        var h = window.innerHeight;
        if (w / h <= 750 / 1920) {
            var fz = w * 100 / 750;
            document.documentElement.style.fontSize = fz + 'px';
        } else {
            var fz = h * (750 / 1920) * 100 / 750;
            document.documentElement.style.fontSize = fz + 'px';
        }
    }
    funn();
    window.onresize = funn
}());

// if (isMobile() !== false)
//     window.location.href = "http://games.ixingban.com/ylq/#/index";

 

    