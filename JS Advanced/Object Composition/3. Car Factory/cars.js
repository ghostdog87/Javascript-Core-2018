function solve(cars) {
    let type = 0;
    let carPower = 0;

    if(cars.power <= 90){
        type = 1800;
        carPower = 90;
    }
    else if(cars.power <= 120){
        type = 2400;
        carPower = 120;
    }
    else{
        type = 3500;
        carPower = 200;
    }

    let tempWheel = 0;
    if(cars.wheelsize % 2 === 0){
        tempWheel = cars.wheelsize - 1;
    }
    else{
        tempWheel = cars.wheelsize;
    }

    let tempArr =[];
    for(let i =0;i< 4; i++){
        tempArr.push(tempWheel);
    }



    let resultCar = { model: cars.model,
        engine: { power: carPower,
        volume: type },
        carriage: { type: cars.carriage,
            color: cars.color },
        wheels: tempArr
    };

    console.log(resultCar);
    return resultCar;
}

solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
);