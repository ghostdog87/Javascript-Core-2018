class getSortedList{
    constructor(){
        this.list = [];
        this.size = 0;
    }

    add(el) {
        this.list.push(el);
        this.size++;
        this.list.sort((a,b) => a - b);
    }
    remove(index) {
        if(index >=0 && index < this.list.length){
            this.list.splice(index,1);
            this.size--;
        }
    }
    get(index) {
        if(index >=0 && index < this.list.length){
            return this.list[index];
        }
    }
}


let sortedList = new getSortedList();

sortedList.add(2);
sortedList.add(3);
sortedList.add(4);
sortedList.remove(1);
sortedList.get(1);
console.log(sortedList.list.toString());
console.log(sortedList.size);