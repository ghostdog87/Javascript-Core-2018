solve('Was that Easy? tRY thIs onE for SiZe!');


function solve(text){

    let arr = text.split(' ');
    let arr2 = [];

    for(let i = 0;i<arr.length;i++){
        arr2.push(arr[i][0].toUpperCase() + arr[i].substring(1,arr[i].length).toLowerCase());
    }

    console.log(arr2.join(' '));
}