solve('One-Two-Three-Four-Five','-');


function solve(text,delimiter){
    let arr = text.split(delimiter);

    console.log(arr.join('\n'));

}