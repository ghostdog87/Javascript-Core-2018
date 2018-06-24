solve(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10 ' ]);


function solve(input){
    let brands = new Map();

    for(let i =0;i<input.length;i++){
        let currentInput = input[i].split("|").map(a=>a.trim());

        let brandName  = currentInput[0];
        let brandModel  = currentInput[1];
        let brandNum  = Number(currentInput[2]);

        let currentBrand = new Map();

        if(!brands.has(brandName)){
            currentBrand.set(brandModel,brandNum);
            brands.set(brandName,currentBrand);
        }
        else{
            if(!brands.get(brandName).has(brandModel)){

                brands.get(brandName).set(brandModel,brandNum);
            }
            else{
                let sum = brands.get(brandName).get(brandModel) + brandNum;
                brands.get(brandName).set(brandModel,sum);
            }

        }
    }

    for(const [brand,models] of brands){
        console.log(brand);

        for(const [model,size] of models){
            console.log(`###${model} -> ${size}`);
        }
    }
}