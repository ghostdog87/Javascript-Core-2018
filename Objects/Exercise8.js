solve(['[-3, -2, -1, 0]',
    '[0]',
    '[0]',
    '[10,1, -17, 0, 2, 13,5,6]',
    '[14, 3, 3, -2, 2, -1, 1,    0]',
    '[14, 3, 3, -2, 2, -1, 1   , 0]']);


/*function solve(input){
    let result = new Set();
    for(let i =0;i<input.length;i++){
        let currentArr = JSON.parse(input[i]).sort((a,b)=> a < b);
        let toString = currentArr.join(" ");
        result.add(toString);
    }
    let sortedArr = Array.from(result).sort((a,b) => a.length - b.length);
    sortedArr.forEach(a=>console.log('[' + a.split(" ").map(b=>Number(b)).join(", ") + ']'));
}*/


function solve(input){
    let arrays = new Map();
    for (let i = 0; i < input.length; i++) {
        let currentArray = JSON.parse(input[i]).map(Number).sort((a,b) => b - a);
        let toAdd = currentArray.join(', ');
        if(!arrays.has(toAdd)){
            arrays.set(toAdd, currentArray.length)
        }
    }
    let result = Array.from(arrays.keys()).sort((a,b) => arrays.get(a) - arrays.get(b));
    result.forEach(a => console.log(`[${a}]`))
}