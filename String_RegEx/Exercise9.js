solve(['Join WebStars now for free, at www.web-stars.com ',
    'You can also support our partners:Internet - www.internet.com',
    'WebSpiders - www.webspiders101.com',
    'Sentinel - www.sentinel.-ko']);


function solve(text1){
    let result = [];
    const regex = /[www]{3}[.]{1}[\dA-Za-z-]+([.][a-z]+)+/g;

    for(let i =0;i<text1.length;i++){
        let arr = text1[i].match(regex);
        if(arr!=null){
            result.push(arr);
        }
    }

    console.log(result.join('\n'));

}