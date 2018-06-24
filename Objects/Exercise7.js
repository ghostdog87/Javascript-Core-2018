solve(['Ashton' ,
    'Kutcher',
    'Ariel',
    'Lilly',
   'Keyden',
    'Aizen',
   'Billy',
    'Kutcher',
   'Braston' ]);


function solve(input){
    let brands = new Set();

    for(let i =0;i<input.length;i++){
        let currentInput = input[i].trim();
        brands.add(currentInput);
    }

    let sortedNames = Array.from(brands).sort((a,b) =>{
        let len = a.length - b.length;
        if(len === 0){
            return a.localeCompare(b);
        }
        return len;
    });

    console.log(sortedNames.join("\n"));


}