setInterval(printTime, {
    
}, 1000);

function printTime(){
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let period = "AM";

    if(hours >= 12){
        period = "PM";
    }
    
    if(hours > 12){
       hours = hours - 12;

    }
    if(seconds < 10){
        seconds = "0" + seconds;
    }

    if(minutes < 10){
        minutes = "0" + minutes;
    }

    var clockTime = hours + ":" + minutes + ":" + seconds + " " + period;

    document.getElementById('clock').innerHTML = clockTime;

}

document.getElementById('Button').addEventListener('click', showFullDate);

function showFullDate(){
    let currentDate = new Date();
    let year = currentDate.getFullYear();
    let months = currentDate.getMonth();
    let date = currentDate.getDate();
    if(months < 10){
        months = "0" + months;
    }

    if(date < 10){
        date = "0" + date;
    }
    let fulldate = date + "-" + months + "-" + year
    let isempty = document.getElementById('showdate').innerHTML === "";
    if(!isempty){
        showdate.style.display = 'none';
    }
    else if(isempty){
        // showdate.style.display = 'block';
    document.getElementById('showdate').innerHTML = fulldate ;
    }

    
}