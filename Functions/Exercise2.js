function solve(input) {
    function getLimit(zone){
        switch(zone){
            case 'motorway':return 130;
            case 'interstate':return 90;
            case 'city':return 50;
            case 'residential':return 20;
        }
    }

    function getInfraction(speed,limit){
        let overspeed = speed - limit;
        if(overspeed<=0){
            return false;
        }
        else if(overspeed>0 && overspeed<=20){
            return "speeding";
        }
        else if(overspeed>20 && overspeed<=40){
            return "excessive speeding";
        }
        else{
            return "reckless driving";
        }
    }

    let speed = input[0];
    let zone = input[1];
    let limit = getLimit(zone);
    let infraction = getInfraction(speed,limit);
    if(infraction){
        console.log(infraction);
    }
}

solve([200,'motorway']);
