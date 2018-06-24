function solve(input) {
    let arr = input.map(a => Number(a));

    let newArr = arr.filter((a,b)=>a>=arr[b-1]);

    newArr.unshift(arr[0]);

    console.log(newArr.join("\n"));
}

solve(['1','3','8','4','10','12',
'3',
'2',
'24']);