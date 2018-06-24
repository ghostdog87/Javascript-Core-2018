function timer() {
    let timer;
    let currentTime = 0;
    let flag = true;

    $("#start-timer").on("click",function () {
        if(flag){
            timer = setInterval(step,1000);
            flag = false;
        }

    });

    $("#stop-timer").on("click",function () {
        clearInterval(timer);
        flag = true;
    });

    function step() {
        currentTime++;
        let seconds = currentTime % 60;


        let minutes = Math.floor(currentTime / 60).toFixed(0);

        if(minutes > 59){
            minutes %= 60;
        }
        let hours = Math.floor(currentTime / 3600).toFixed(0);

        if(hours > 23){
            hours %= 24;
        }


        $("#hours").text(hours.toString().padStart(2,'0'));
        $("#minutes").text(minutes.toString().padStart(2,'0'));
        $("#seconds").text(seconds.toString().padStart(2,'0'));

    }
}


