

function main(){
    setInterval(showTime, 1000);

    document.getElementById("bgButtons").addEventListener('click', (e) => {
        if (e.target.tagName !== 'BUTTON') return;
        targetId = e.target.id;
        selectedBackground = targetId.slice(6);
        console.log("Selected background: " + selectedBackground);
        document.getElementById("pageBody").className = selectedBackground;

    });
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

main();