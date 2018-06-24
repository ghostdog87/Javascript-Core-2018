solve(['123a456','789b987','654c321','0']);




function solve(text){
    let result = [];
    const regex = /[0-9]+/g;
    for(let i =0;i<text.length;i++){
        let arr = text[i].match(regex);
        if(arr != null){
            for(let a =0;a<arr.length;a++){
                result.push(arr[a]);
            }
        }

    }

    console.log(result.join(' '));
}