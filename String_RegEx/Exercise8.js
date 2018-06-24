solve('The waterfall was so high, that the child couldn’t see its peak.',
    'the');


function solve(text1,text2){
    let result = [];
    let regex = new RegExp('\\b'+text2+'\\b',"gi");

    let arr = text1.match(regex);
    if(arr != null){
        console.log(arr.length);
    }
    else{
        console.log(0);
    }
}