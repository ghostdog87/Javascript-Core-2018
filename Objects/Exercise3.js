solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549' ]);


function solve(input){
    let result = new Map();
    let tempResult = new Map();

    for(let i =0;i<input.length;i++){
        let current = input[i].split("=>").map(a=>a.trim());
        if(!tempResult.has(current[0])){
            tempResult.set(current[0], Number(current[1]));
            if(Number(current[1]) >= 1000){
                result.set(current[0], Number(current[1]));
            }
        }
        else
        {
            tempResult.set(current[0], tempResult.get(current[0]) + Number(current[1]));
            if(tempResult.get(current[0]) >= 1000){
                    result.set(current[0], tempResult.get(current[0]));
            }

        }

    }

    for (let [fruit, liters] of result){
        let bottles = (liters / 1000);
        if(bottles >= 1){
            console.log(fruit + " => " + bottles.toFixed(0));
        }
    }
}