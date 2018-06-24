function attachEventsListeners() {
    document.getElementById("daysBtn").addEventListener("click", function () {
        let days = Number(document.getElementById("days").value);
        console.log(days);

        document.getElementById("hours").value = days * 24;
        document.getElementById("minutes").value = days * 24 * 60;
        document.getElementById("seconds").value = days * 24 * 60 * 60;
    });

    document.getElementById("hoursBtn").addEventListener("click", function () {
        let hours = Number(document.getElementById("hours").value);
        document.getElementById("days").value = hours / 24;
        document.getElementById("minutes").value = hours * 60;
        document.getElementById("seconds").value = hours * 60 * 60;
    });

    document.getElementById("minutesBtn").addEventListener("click", function () {
        let minutes = Number(document.getElementById("minutes").value);
        document.getElementById("days").value = minutes / 60 / 24;
        document.getElementById("hours").value = minutes / 60;
        document.getElementById("seconds").value = minutes * 60;
    });

    document.getElementById("secondsBtn").addEventListener("click", function () {
        let seconds = Number(document.getElementById("seconds").value);
        document.getElementById("days").value = seconds / 60 / 60 / 24;
        document.getElementById("hours").value = seconds / 60 / 60;
        document.getElementById("minutes").value = seconds / 60;
    });
}
