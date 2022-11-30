function final() {
    var mydate = new Date();
    var year = mydate.getYear();

    if (year < 1000) {
        year = year + 1900;
    }

    var day = mydate.getDay();
    var month = mydate.getMonth();
    var dayar = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    var monthar = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");

    var currentTime = new Date();
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();

    if (h == 24) {
        h = 0;
    } else if (h > 12) {
        h = h - 0;
    }

    if (h < 10) {
        h = "0" + h;
    }

    if (m < 10) {
        m = "0" + m;
    }

    if (s < 10) {
        s = "0" + s;
    }

    var myClock = document.getElementById("time");

    myClock.textContent = "" + dayar[day] + "|" + monthar[month] + " " + year + " | " + h + ":" + m + ":" + s;
    myClock.innerText = "" + dayar[day] + " " + "|" + " " + monthar[month] + " " + year + " | " + h + ":" + m + ":" + s;

    setTimeout("final()", 1000);

}

final();