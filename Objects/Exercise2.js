solve(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']);


function solve(input){

    let result = "<table>\n";


    for(let i =0;i<input.length;i++){
        let currentPerson = JSON.parse(input[i]);
        result += "\t<tr>\n";
        result += "\t\t<td>" + currentPerson.name + "</td>\n";
        result += "\t\t<td>" + currentPerson.position + "</td>\n";
        result += "\t\t<td>" + currentPerson.salary + "</td>\n";
        result += "\t<tr>\n";

    }

    result += "</table>";

    console.log(result);
}