solve(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199",
    "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"]);


function solve(input){
    let specialized = ['Programming', 'Hardware maintenance', 'Cooking', 'Translating', 'Designing'];
    let average = ['Driving', 'Managing', 'Fishing', 'Gardening'];
    let clumsy = ['Singing', 'Accounting', 'Teaching', 'Exam-Making', 'Acting', 'Writing', 'Lecturing', 'Modeling', 'Nursing'];

    let totalGold = 0;

    let specCount = 1;
    let clumCount = 1;

    for(let i =0;i<input.length;i++){
        let currentInput = input[i].split(":").map(a=>a.trim());
        let currentSpec = currentInput[0];
        let currentGold = Number(currentInput[1]);

        if(specialized.includes(currentSpec)){
            if(currentGold < 200){
                continue;
            }

            if(specCount % 2 === 0){
                totalGold += currentGold - currentGold * 0.2;
                totalGold += 200;
            }
            else{
                totalGold += currentGold - currentGold * 0.2;
            }
            specCount++;

        }

        if(average.includes(currentSpec)){
            totalGold += currentGold;
        }

        if(clumsy.includes(currentSpec)){
            if(clumCount % 2 === 0){
                totalGold += currentGold - currentGold * 0.05;
            }
            else if(clumCount % 3 === 0){
                totalGold += currentGold - currentGold * 0.1;
            }
            else{
                totalGold += currentGold;
            }
            clumCount++;
        }
    }


    console.log("Final sum: " + totalGold.toFixed(2));

    if(totalGold - 1000 < 0){
        console.log(`Mariyka need to earn ${(1000-totalGold).toFixed(2)} gold more to continue in the next task.`);
    }
    else{
        console.log(`Mariyka earned ${(totalGold-1000).toFixed(2)} gold more.`);
    }


}