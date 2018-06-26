solve([14, 7, 17, 6, 8], 'asc');
solve([14, 7, 17, 6, 8], 'desc');

function solve(arr,sortMethod) {
    let sorting = {
        'asc' : function(a, b){
            return a - b;
        },
        'desc' : function(a, b){
            return b - a;
        }
    };

    return arr.sort(sorting[sortMethod]);
}

