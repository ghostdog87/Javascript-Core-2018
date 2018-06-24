function solve(input) {
    function distance(x1,y1,x2,y2){
        let result = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2));
        return result;
    }

    if(Number.isInteger(distance(input[0],input[1],0,0))){
        console.log("{"+input[0] +", "+ input[1] +"} to {0, 0} is valid");
    }
    else{
        console.log("{"+input[0] +", "+ input[1] +"} to {0, 0} is invalid");
    }
    if(Number.isInteger(distance(input[2],input[3],0,0))){
        console.log("{"+input[2] +", "+ input[3] +"} to {0, 0} is valid");
    }
    else{
        console.log("{"+input[2] +", "+ input[3] +"} to {0, 0} is invalid");
    }
    if(Number.isInteger(distance(input[0],input[1],input[2],input[3]))){
        console.log("{"+input[0] +", "+ input[1] +"} to {"+ input[2] +", "+ input[3] +"} is valid");
    }
    else{
        console.log("{"+input[0] +", "+ input[1] +"} to {"+ input[2] +", "+ input[3] +"} is invalid");
    }
}

solve([3,0,0,4]);