(function solve() {
    String.prototype.ensureStart = function(str){
        if(this.substring(0,str.length) === str){
            return this.toString();
        }
        else{
            return str + this.toString();
        }
    };
    String.prototype.ensureEnd = function(str){
        if(this.substring(this.length - str.length,this.length) === str){
            return this.toString();
        }
        else{
            return this.toString() + str;
        }
    };
    String.prototype.isEmpty = function(){
        return this.length <= 0;
    };
    String.prototype.truncate = function(n){
        if(this.length <= n){
            return this.toString();
        }
        else{
            let newStr = this.substring(0,n-1);
            if(newStr.lastIndexOf(" ") !== -1){
                return newStr.substring(0,newStr.lastIndexOf(" ")) + "...";
            }
            else if(this.lastIndexOf(" ") !== -1){
                return this.substring(0,this.lastIndexOf(" ")) + "...";
            }
            else{
                if(n >= 4){
                    return this.substring(0,n-3) + "...";
                }
                else{
                    let periods  = ".";
                    return periods.repeat(n);
                }
            }
        }
    };
    String.format = function(){
        let str = arguments[0];
        let args = [];
        for(let i = 1;i<arguments.length;i++){
            args.push(arguments[i]);
            if(str.includes("{" + (i-1) + "}")){
                str = str.replace("{" + (i-1) + "}",args[i-1]);
            }
        }

        return str;
    };

})();

let str = 'quick brown fox jumps over the lazy dog';
console.log(str = str.ensureStart('the '));
console.log(str = str.ensureEnd(' dog'));
console.log(''.isEmpty());
console.log(str = str.truncate(16));
console.log(str = str.truncate(14));
console.log(str = str.truncate(8));
console.log(str = str.truncate(43));
console.log(str = str.truncate(2));
console.log(str = String.format('The {0} {1} fox','quick', 'brown'));
console.log(str = String.format('jumps {0} {1}','dog'));

