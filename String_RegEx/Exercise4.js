solve('This sentence ends with fun?',
    'fun?');


function solve(text1,text2){

    let subText = text1.indexOf(text2);

    if(subText + text2.length === text1.length){
        console.log(true);
    }
    else{
        console.log(false);
    }
}