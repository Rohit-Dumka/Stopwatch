alert("Please don't forget to give a STAR 🙏. It motivates us to do more hardwork also suggestions are welcomed")
window.onload = function() {

    var secs = 00;
    var ms = 00;
    var appendBox = document.getElementById("box")
        // var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('start');
    var buttonStop = document.getElementById('stop');
    var buttonReset = document.getElementById('reset');
    var Interval;

    buttonStart.onclick = function() {
        audio.play();

        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function() {
        clearInterval(Interval);
        audio.pause();
    }


    buttonReset.onclick = function() {
        clearInterval(Interval);
        audio.pause();
        ms = "00";
        secs = "0";
        appendBox.innerHTML = secs + ' : ' + ms;

    }



    function startTimer() {
        ms++;

        if (ms < 9) {
            appendBox.innerHTML = secs + ' : ' + '0' + ms;
        }

        if (ms > 9) {
            appendBox.innerHTML = secs + ' : ' + ms;

        }

        if (ms > 99) {
            secs++;
            appendBox.innerHTML = secs + ' : ' + '0' + ms;
            ms = 0;
        }
        if (secs < 9) {
            appendBox.innerHTML = secs + ' : ' + ms;
        }

    }



}

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
};