solve('Marketing Fundamentals, starting 19/10/2016',
'Marketing Fundamentals, sta');


function solve(text1,text2){

    let subText = text1.substring(0,text2.length);

    if(subText === text2){
        console.log(true);
    }
    else{
        console.log(false);
    }
}