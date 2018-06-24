function solve(input) {
    input.sort((a, b)=>comparingByLength(a,b));


    function comparingByLength(a, b) {
        if (a.length - b.length == 0) {
            if(a.toUpperCase() < b.toUpperCase()){
                return -1;
            }
            else if(a.toUpperCase() > b.toUpperCase()){
                return 1;
            }
            else{
                return 0;
            }
        }
        else{
            return a.length - b.length;
        }
    }


    console.log(input.join("\n"));
}

solve(['Isacc',
    'Theodor',
    'Jack',
   'Harrison',
    'George']);