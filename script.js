function newYearCountdown() {
    const newYearDate = new Date("January 1, 2025 00:00");
    const now = new Date();
    const diff = newYearDate - now;
    const msInSecond = 1000;
    const msInMinute = 60*1000;
    const msInHour = 60*60*1000;
    const msInDay = 24*60*60*1000;

const displayDay = Math.floor(diff/msInDay);
document.querySelector(".days").textContent = displayDay;
const displayHour = Math.floor((diff%msInDay) / msInHour);
document.querySelector(".hours").textContent = displayHour;
const displayMinute = Math.floor((diff%msInHour) / msInMinute);
document.querySelector(".minutes").textContent = displayMinute;
const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
document.querySelector(".seconds").textContent = displaySecond;


if (diff<=0) {
    document.querySelector(".days").textContent = 0;
    document.querySelector(".hours").textContent = 0;
    document.querySelector(".minutes").textContent = 0;
    document.querySelector(".seconds").textContent = 0;

    clearInterval(timeID);
    newYear();
}
}

let timeID = setInterval(newYearCountdown, 1000);

function newYear () {
    const heading = document.querySelector("h1");
    heading.textContent = "Happy New Year 2025!";
    heading.classList.add("blue");
}

const button = document.querySelector("#myButton");
const snow = document.querySelector(".snowContainer");
button.addEventListener("click", function() {
    document.querySelector("#myAudio").play();
})
snow.addEventListener("click", function() {
    document.querySelector("#myAudio").play();
})
