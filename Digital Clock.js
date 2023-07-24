



function Digi_Clock() {

    let hours = document.getElementById('hour')
    let mintues = document.getElementById('minute')
    let seconds = document.getElementById('second')
    let am = document.getElementById('ampm')

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"

    if (h > 12) {
        h = h - 12
        ampm = "PM"
    }

    if (h < 10 ) {
        h = "0" + h;
    }

    if (m < 10) {
        m = "0" + m;
    }

    if (s < 10) {
        s = "0" + s
    }

    hours.innerText = h;
    mintues.innerText = m;
    seconds.innerText = s;
    am.innerText = ampm;
}

let interval = setInterval(Digi_Clock, 1000);

