function solve(input) {
    let rotation = Number(input.pop());

    rotation %= input.length;


    for(let i = 0;i<rotation;i++){
        let last = input.pop();
        input.unshift(last);

    }

    console.log(input.join(" "));
}

solve(['1','2','3','4','2']);