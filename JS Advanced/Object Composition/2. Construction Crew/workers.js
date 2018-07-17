function solve(worker) {

    let addAlc = 0;
    if(worker.handsShaking === true){
        addAlc = 0.1 * worker.weight * worker.experience;
    }
    worker.bloodAlcoholLevel += addAlc;
    worker.handsShaking = false;

    return worker;
}

solve({ weight: 80,
    experience: 1,
    bloodAlcoholLevel: 0,
    handsShaking: true }
);