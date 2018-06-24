solve(
    ['5 3 12 3 1',
        '11 4 23 2 5',
        '101 12 3 21 10',
        '1 4 5 2 2',
        '5 22 33 11 1']
);

function solve(arr) {

    let matrix = [];
    for(let i =0;i<arr.length;i++){
        matrix.push(arr[i].split(' ').map(Number));
    }

    let diagonalSum1 = 0;
    let diagonalSum2 = 0;

    for(let row =0;row<matrix.length;row++){
        for(let col =0;col<matrix.length;col++){
            if(row===col){
                diagonalSum1 += matrix[row][col];
            }
            if((matrix.length - row - 1)===col){
                diagonalSum2 += matrix[row][col];
            }
        }
    }
    if(diagonalSum1 === diagonalSum2){
        for(let row =0;row<matrix.length;row++){
            for(let col =0;col<matrix.length;col++){
                if((row!==col) && (matrix.length - row - 1)!==col){
                    matrix[row][col] = diagonalSum1;
                }
            }
        }
    }

    console.log(matrix.map(rows=>rows.join(' ')).join('\n'));
}
