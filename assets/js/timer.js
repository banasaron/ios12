let hour, minutes;
function updateClock() {
    let current_date = new Date(),
        day = current_date.getDate(),
        seconds = current_date.getSeconds();
    hour = current_date.getHours();
    minutes = current_date.getMinutes();
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    let dayOfWeekIndex = current_date.getDay();

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let dayName = daysOfWeek[dayOfWeekIndex];

    let monthIndex = current_date.getMonth();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let monthName = months[monthIndex];

    document.querySelector("#dateSpan").innerHTML = dayName + ", " + day + " " + monthName;
    document.querySelector("#timeSpan").innerHTML = hour + ":" + minutes;
}
document.addEventListener('DOMContentLoaded', updateClock);

setInterval(updateClock, 10);
