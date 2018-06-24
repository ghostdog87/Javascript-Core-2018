solve(5,5);


function solve(rowsN,colsN) {
    let matrix = [];
    let matrixLength = rowsN * colsN;
    let currentNum = 1;

    for(let rows =0;rows<rowsN;rows++){
            matrix.push([]);
    }

    let goRight = rowsN;
    let goLeft = rowsN - goRight;
    let goDown = rowsN;
    let goUp = rowsN - goDown;
    while(currentNum<=matrixLength){
        for(let i=goUp;i<goRight;i++,currentNum++){
            matrix[goUp][i] = currentNum;
        }
        goRight--;
        for(let i=goLeft+1;i<goDown;i++,currentNum++){
            matrix[i][goRight] = currentNum;
        }
        goDown--;


        for(let i=goRight-1;i>=goLeft;i--,currentNum++){
            matrix[goDown][i] = currentNum;
        }
        goLeft++;

        for(let i=goDown-1;i>goUp;i--,currentNum++){
            matrix[i][goLeft-1] = currentNum;
        }
        goUp++;
        //break;
    }


    console.log(matrix.map(r=>r.join(' ')).join('\n'));
}
