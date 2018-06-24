solve(['Agent *Ivankov was in the room when it all happened.',
    'The person in the room was heavily armed.',
    'Agent *Ivankov had to act quick in order.',
    'He picked up his phone and called some unknown number.',
    'I think it was +555-49-796',
    'I can\'t really remember...',
    'He said (!2491a23BVB34Q) something about "finishing work" with subject !2491a23BVB34Q and returning to Base _Aurora21',
    'Then after that he disappeared from my sight.',
    'As if he vanished in the shadows.',
    'A moment, shorter than a second, later, I saw the person flying off the top floor.',
    'I really don\'t know what happened there.',
    'This is all I saw, that night.',
    'I cannot explain it myself...']);


function solve(text1){
    let result = [];
    const name = /[*][A-Z][A-Za-z]*(?=\s|\t|$)/g;
    const phone = /[+][0-9-]{10}(?=\s|\t|$)/g;
    const ID = /[!][A-Za-z0-9]+(?=\s|\t|$)/g;
    const base = /[_][A-Za-z\d]+(?=\s|\t|$)/g;


    for(let i =0;i<text1.length;i++){

        let currentText = text1[i];

        currentText = currentText.replace(name,name => "|".repeat(name.length));
        currentText = currentText.replace(phone,phone => "|".repeat(phone.length));
        currentText = currentText.replace(ID,ID => "|".repeat(ID.length));
        currentText = currentText.replace(base,base => "|".repeat(base.length));

        result.push(currentText);
    }

    console.log(result.join("\n"));
}