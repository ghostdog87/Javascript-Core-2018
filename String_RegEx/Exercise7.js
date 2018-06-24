solve('__invalidVariable _evenMoreInvalidVariable_ _validVariable');


function solve(text){
    let result = [];
    const regex = /\b[_]{1}([A-Za-z0-9]+)\b/g;


    let arr = text.match(regex);

    if(arr != null){
        for(let a =0;a<arr.length;a++){
            result.push(arr[a].split('_')[1]);
        }
    }

    console.log(result.join(','));
}