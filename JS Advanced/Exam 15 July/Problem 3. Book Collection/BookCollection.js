class BookCollection {
    constructor(shelfGenre,room,shelfCapacity){
        this.room = room;
        if(room !== "livingRoom" && room !== "bedRoom" && room !== "closet"){
            throw new TypeError(`Cannot have book shelf in ${room}`);
        }
        else{
            this.shelfGenre = shelfGenre;
            this.shelf = [];
            this.shelfCapacity = Number(shelfCapacity);
            this._room = room;
            this.booksPosition =[];
        }


    }

    addBook(bookName, bookAuthor, genre){
        this.book = {
            name: bookName,
            author: bookAuthor,
        };

        if(genre !== undefined){
            this.book["genre"] = genre;
        }


        if(this.shelf.length < this.shelfCapacity)
        {
            this.booksPosition.push(this.book);
            this.shelf.push(this.book);
            this.shelf = this.shelf.sort((g1, g2) => {
                return g1.author.localeCompare(g2.author);
            });
        }
        else{
            let first = "";
            for(let el of this.booksPosition){
                first = el.name;
                break;
            }
            this.shelf = this.shelf.filter(function(el) {
                return el.name !== first;
            });
            this.booksPosition = this.booksPosition.filter(function(el) {
                return el.name !== first;
            });
            this.booksPosition.push(this.book);
            this.shelf.push(this.book);
            this.shelf = this.shelf.sort((g1, g2) => {
                return g1.author.localeCompare(g2.author);
            });
        }
        return this;
    }


    throwAwayBook(bookName){
        this.booksPosition = this.booksPosition.filter(function(el) {
            return el.name !== bookName;
        });
        this.shelf = this.shelf.filter(function(el) {
            return el.name !== bookName;
        });
    }

    showBooks(genre){
        let booksGyGenre = this.shelf.filter(function(el) {
            return el.genre === genre;
        });

        if(booksGyGenre.length === 0){
            return "test";
        }
        else{

            let result2 = [];
            for(const elem of booksGyGenre){
                result2.push(`\uD83D\uDCD6 ${elem.author} - "${elem.name}"`);
            }

            return `Results for search "${genre}":\n`+
                `${result2.join("\n")}`;
        }


    }

    get shelfCondition(){
        return this.shelfCapacity - this.shelf.length;
    }

    toString(){
        if(this.shelf.length === 0){
            return `It's an empty shelf`;
        }
        else{


            let result = [];
            for(const elem of this.shelf){
                result.push(`\uD83D\uDCD6 "${elem.name}" - ${elem.author}`);
            }

            return `"${this.shelfGenre}" shelf in ${this._room} contains:\n`+
                `${result.join("\n")}`;
        }
    }
}


let bedRoo = new BookCollection('Mixed1', 'bedRoom',3);
let bedRoom = new BookCollection('Mixed2', 'bedRoom',3);


bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
// bedRoom.addBook("John Adams", "David McCullough", "history");
// bedRoom.addBook("123", "456","123");
// bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
// bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
// bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
// bedRoom.addBook("John Adams", "David McCullough", "history");
// bedRoom.addBook("123", "456","123");
// bedRoom.addBook("Atlas of Remote Islands", "Judith Schalansky");
// bedRoom.addBook("The Guns of August", "Cuentos para pensar", "history");
// bedRoom.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
// bedRoom.addBook("John Adams", "David McCullough", "history");
// bedRoom.throwAwayBook("123");
// bedRoom.addBook("123", "456","123");
// // console.log("Shelf's capacity: " + bedRoom.shelfCondition);
//console.log("Shelf's capacity: " + bedRoom.shelfCondition);
console.log(bedRoom.toString());

//console.log(bedRoom.toString());
//console.log(bedRoom.showBooks("history"));

// let bedRoom2 = new BookCollection('pesho', 'bedRoom', 5);
// bedRoom2.addBook("John Adams", "David McCullough", "history");
// bedRoom2.addBook("The Guns of August", "Cuentos para pensar", "history");
// bedRoom2.addBook("Atlas of Remote Islands", "Judith Schalansky");
// bedRoom2.addBook("Paddle-to-the-Sea", "Holling Clancy Holling");
// console.log(bedRoom2.toString());


