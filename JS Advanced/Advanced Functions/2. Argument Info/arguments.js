result({ name: 'bob'}, 3.333, 9.999);

function result() {
    let types = [];

    for(let i=0;i<arguments.length;i++){
        let obj = arguments[i];
        let type = typeof obj;
        console.log(type + ': ' + obj);

        if(!types[type]){
            types[type] = 1;
        }
        else{
            types[type]++;
        }
    }


    let sortedTypes = Object.keys(types).sort((a,b) => {return types[b]-types[a]});
    for(let arg of sortedTypes){
        console.log(arg + " = " + types[arg]);
    }
}