solve(
    [[5, 5, 5],
        [5, 5, 5],
        [5,4, 5]]
);

function solve(input) {
    let sum = -1000;
    let flag = true;

    for(let rows =0;rows<input.length;rows++){
        let sumCols = 0;
        for(let cols =0;cols<input.length;cols++) {

            if (sum < 0) {
                sum = input[rows].reduce((a, b) => a + b);
            }
            if (input[rows].reduce((a, b) => a + b) !== sum) {
                flag = false;
            }
            sumCols += input[cols][rows];
        }


        if (sumCols !== sum) {
            flag = false;
        }
    }

    console.log(flag);
}
