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

    $('.hours').textContent = theHour();
    $('.minutes').textContent = theMinute();
    $('.seconds').textContent = theSecond();
}, 1000);
