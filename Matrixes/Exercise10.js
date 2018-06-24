solve(
    [5, 5, 2, 2]
);

function solve(arr) {

    let matrix = [];

    let width = Number(arr[0]);
    let height = Number(arr[1]);
    let x = Number(arr[2]);
    let y = Number(arr[3]);

    for(let i =0;i<height;i++){
        matrix.push([]);
    }
    matrix[x][y] = 1;




    for (let row = 0; row < height; row++) {
        for (let col = 0; col < width; col++) {
            matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
        }
    }


    console.log(matrix.map(rows=>rows.join(' ')).join('\n'));
}
