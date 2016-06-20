$ = function(s){ return document.querySelector(s); };

var interval = setInterval(function () {
    var date = new Date();

    var theHour = function(){
        var h = date.getHours();
        if (h > 12){
            h = h - 12;
            if (h < 10) h = "0" + h;
        }
        return h;
    }

    var theMinute = function(){
        var m = date.getMinutes();
        if (m < 10) m = "0" + m;
        return m;
    }

    var theSecond = function(){
        var s = date.getSeconds();
        if (s < 10) s = "0" + s;
        return s;
    }

    // Convert a number to a hexadecimal using toString(16)
    var R = Number(theHour()).toString(16);
    var G = Number(theMinute()).toString(16);
    var B = Number(theSecond()).toString(16);
    if (R.length == 1) R = R + R;
    if (G.length == 1) G = G + G;
    if (B.length == 1) B = B + B;
    var hexStr = R + G + B;

    $('.hours').textContent = R;
    $('.minutes').textContent = G;
    $('.seconds').textContent = B;
    document.body.style.backgroundColor = "#" + hexStr;
}, 1000);
