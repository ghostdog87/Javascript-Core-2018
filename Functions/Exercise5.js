function solve(input) {
    let result = "" + input;
    let averageValue = 0;
    while(averageValue <= 5){
        let sum = 0;
        for(let i =0;i<result.length;i++){
            sum += Number(result[i]);
        }
        averageValue = sum / result.length;
        if(averageValue<=5){
            result = result + "" + 9;
        }
    }
    console.log(result);

}

solve(101);