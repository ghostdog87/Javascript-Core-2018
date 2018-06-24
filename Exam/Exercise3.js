solve(["1", "2","as", "  "]);


function solve(input){

    let start = Number(input[0]);
    let end = Number(input[1]);
    let correct = input[2];
    let text  = input[3];

    const numPattern = /([0-9]+[.]*[0-9]*){3,}/g;
    const countryPattern = /\b[A-Z][\w]*[A-Z]\b/g;

    let countryOrigin = text.match(countryPattern);
    let allNums = text.match(numPattern);



    let secondName = "";
    let country = "";


    if(allNums !== null){
        secondName = allNums.map(num => String.fromCharCode(Math.ceil(Number(num)))).join('');
    }

    if(countryOrigin !== null){
        let subText = countryOrigin[0].substr(start,end-start+1);
        country = countryOrigin[0].replace(subText,correct).toLowerCase();
    }
    console.log(`${country.charAt(0).toUpperCase() + country.slice(1)} => ${secondName.charAt(0).toUpperCase() + secondName.slice(1)}`);
}