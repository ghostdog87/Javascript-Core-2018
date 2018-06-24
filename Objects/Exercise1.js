solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);


function solve(input){
    let AllHeroes = [];


    for(let i =0;i<input.length;i++){
        let heroesData = input[i].split("/").map(a => a.trim());

        let heroName = heroesData[0];
        let heroLevel = Number(heroesData[1]);

        let heroItem = [];

        if(heroesData.length>2){
            heroItem = heroesData[2].split(",").map(a => a.trim());
        }

        let hero = {
            name : heroName,
            level : heroLevel,
            items : heroItem
        };

        AllHeroes.push(hero);

    }

    console.log(JSON.stringify(AllHeroes));
}