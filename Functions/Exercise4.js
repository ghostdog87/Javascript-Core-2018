function solve(input) {
    let[num,op1,op2,op3,op4,op5] = [Number(input[0]),input[1],input[2],input[3],input[4],input[5]];

    let chop=(num)=>num/2;
    let dice=(num)=>Math.sqrt(num);
    let spice=(num)=>num + 1;
    let bake=(num)=>num * 3;
    let fillet=(num)=>num - (num/5);

    result = "";
    for(let arr of [op1,op2,op3,op4,op5]){
        switch (arr){
            case 'chop':

                console.log(chop(num));
                num=chop(num);
                break;
            case 'dice': console.log(dice(num));
                num=dice(num);
                break;
            case 'spice': console.log(spice(num));
                num=spice(num);
                break;
            case 'bake': console.log(bake(num));
                num=bake(num);
                break;
            case 'fillet': console.log(fillet(num));
                num=fillet(num);
                break;
        }
    }

}
solve([32,'chop','chop','chop','chop','chop']);