function solve(input) {
    let result = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<quiz>";

    for(let i = 0;i < input.length;i += 2){
        let question = input[i];
        let answer = input[i+1];

        result +="\n  <question>\n    "+question+"\n  </question>\n";
        result +="  <answer>\n    "+answer+"\n  </answer>";

    }
    result +="\n</quiz>";

    console.log(result);
}