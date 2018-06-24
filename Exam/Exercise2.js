solve(["bulgariatour@, minkatrans@, koftipochivkaltd",
    "@,",
    "Mincho e KoftiPochivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
    "dqdo mraz some text but is KoftiPochivkaLTD MinkaTrans",
    "someone continues as no "]);

function solve(input){
    let result = [];
    let delimiter = input.splice(1,1);
    let companies = input.shift().split(delimiter[0]);

    let valid = [];
    let invalid = [];

    for(let a =0;a<input.length;a++){
        let counter = 0;
        for(let b =0;b<companies.length;b++){
            if(input[a].toLowerCase().indexOf(companies[b].toLowerCase()) > -1){
                counter++;
            }
        }
        if(counter === companies.length){
            valid.push(input[a]);
        }
        else{
            invalid.push(input[a]);
        }
    }

    if(valid.length > 0){
        console.log("ValidSentences");
        let count = 1;
        for(const sent of valid){
            console.log(`${count}. ${sent.toLowerCase()}`);
            count++;
        }
    }
    if(valid.length > 0 && invalid.length > 0){
        console.log(`${"=".repeat(30)}`);
    }
    if(invalid.length > 0){
        console.log(`InvalidSentences`);
        let count = 1;
        for(const sent of invalid){
            console.log(`${count}. ${sent.toLowerCase()}`);
            count++;
        }
    }
}
