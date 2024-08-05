let pause = document.querySelector("#pause");
let start = document.querySelector("#start");
let reset = document.querySelector("#reset");
let lap = document.querySelector("#lap");

let hrs = document.querySelector("#hr");
let mins = document.querySelector("#min");
let secs = document.querySelector("#sec");
let laps = document.querySelector("#laps");

let sec = 0;
let min = 0;
let hr = 0;
let interval;
let x = 0;
let i = 1;

function startTimer() {
    x = 1;
    if (interval) clearInterval(interval);
    interval = setInterval(() => {
        sec++;
        if (sec === 60) {
            sec = 0;
            min++;
        }
        if (min === 60) {
            min = 0;
            hr++;
        }
        if (hr === 12) {
            sec = 0;
            min = 0;
            hr = 0;
        }

        secs.value = sec < 10 ? `0${sec}` : sec;
        mins.value = min < 10 ? `0${min}` : min;
        hrs.value = hr < 10 ? `0${hr}` : hr;
    }, 1000);
}

function pauseTimer() {
    x = 0;
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    sec = 0;
    min = 0;
    hr = 0;
    hrs.value = '00';
    mins.value = '00';
    secs.value = '00';
    laps.innerHTML = '';
    localStorage.removeItem('laps');
    i = 1;
    x = 0;
}

function recordLap() {
    if (x) {
        let lapTime = `Lap ${i++} = ${hrs.value}:${mins.value}:${secs.value}`;
        let lapItem = document.createElement("li");
        lapItem.textContent = lapTime;
        laps.appendChild(lapItem);

        let storedLaps = JSON.parse(localStorage.getItem('laps')) || [];
        storedLaps.push(lapTime);
        localStorage.setItem('laps', JSON.stringify(storedLaps));
    }
}

function loadLaps() {
    let storedLaps = JSON.parse(localStorage.getItem('laps')) || [];
    storedLaps.forEach(lapTime => {
        let lapItem = document.createElement("li");
        lapItem.textContent = lapTime;
        laps.appendChild(lapItem);
    });
    i = storedLaps.length + 1;
}

start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
reset.addEventListener("click", resetTimer);
lap.addEventListener("click", recordLap);

window.addEventListener('load', loadLaps);
