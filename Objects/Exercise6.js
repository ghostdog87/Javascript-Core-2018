solve(['SULS | Main Site | Home Page ',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security  ' ]);


function solve(input){

    let result = {};

    for(let i = 0;i < input.length;i++){
        let currentInput = input[i].split("|").map(a=>a.trim());

        let systemName = currentInput[0];
        let componentName = currentInput[1];
        let subcomponentName = currentInput[2];

        if(!result.hasOwnProperty(systemName)){
            result[systemName] = {};
            result[systemName][componentName] = [subcomponentName];
        }
        else{
            if(!result[systemName].hasOwnProperty(componentName)) {

                result[systemName][componentName] = [subcomponentName];
            }
            else{
                result[systemName][componentName].push(subcomponentName);

            }

        }
    }

    let sortedSystems = Object.keys(result).sort((a,b)=>{
        let pesho1 = Object.keys(result[a]);
        let pesho2 = Object.keys(result[b]);
        let diffInScore = pesho2.length - pesho1.length;
        if(diffInScore === 0){
            return a.localeCompare(b);
        }
        return diffInScore;
    });

    for(const system of sortedSystems){
        console.log(system);
        //console.log(Object.keys(result[system]));
        let sortedItems = Object.keys(result[system]).sort((i1, i2) => {

            return result[system][i2].length - result[system][i1].length;
            //return system[i2].length - system[i1].length;
        });
        for(const items of sortedItems){
            console.log(`|||${items}`);
            for(const ite of result[system][items]){
                console.log(`||||||${ite}`);
            }
        }
    }





}