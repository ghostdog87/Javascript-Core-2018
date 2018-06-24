solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10' ]);


function solve(input){
    let result = {};

    for(let i =0;i<input.length;i++){
        let current = input[i].split(':').map(a=>a.trim());

        let fruit = current[0];
        let size = current[1];

        let firstLetter = fruit[0];

        if(!result.hasOwnProperty(firstLetter)){
            result[firstLetter] = {};
            result[firstLetter][fruit] = size;
        }
        else{
            result[firstLetter][fruit] = size;
        }

    }

    let fruitOrder = Object.keys(result).sort();

    for(const fruits of fruitOrder){
        console.log(fruits);
        let fruitOrder2 = Object.keys(result[fruits]).sort();

        for(const fruits2 of fruitOrder2){
            console.log(`  ${fruits2}: ${result[fruits][fruits2]}`);
        }

    }
}