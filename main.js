const api = {
    key: "dbd0c6b68f6d0c9d65497957302968db",
    base: "https://api.openweathermap.org/data/2.5/"
}


showTime();
getResults("Toronto");
setInterval(() => getResults("Toronto"), 600000);
setInterval(showTime, 1000);

document.getElementById("bgButtons").addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') return;
    targetId = e.target.id;
    selectedBackground = targetId.slice(6);
    console.log("Selected background: " + selectedBackground);
    document.getElementById("pageBody").className = selectedBackground;

});

function getResults (location) {
    fetch(`${api.base}weather?q=${location}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    }).then(displayResults);
}

function displayResults (weather) {
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

    /*
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`;
    */
}

function dateBuilder (d) { 
    let months = ["January", "February", "March", "April",
                "May", "June", "July", "August",
                "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", 
                "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${month} ${date} ${year}`;
}

function showTime(){
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let period = "AM";

    if (hour === 0){
        hour = 12;
    }

    if (hour >= 12){
        if (hour > 12){
            hour = hour - 12;
        }
        period = "PM";
    }

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    let time = hour + ":" + minute + ":" + second + " " + period;
    document.getElementById("clockDisplay").innerHTML = time;
    document.getElementById("clockDisplay").textContent = time;


}

