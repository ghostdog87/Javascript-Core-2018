class CheckingAccount{
    constructor(clientId,email,firstName,lastName){
        this.products = [];
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId() {
        return this._clientId;
    }

    set clientId(value) {
        if(isNaN(value) || value.length !== 6){
            throw new TypeError("Client ID must be a 6-digit number");
        }
        else{
            this._clientId = value;
        }
    }

    get email() {
        return this._email;
    }

    set email(value) {
        const regex = /[\w]+@[\w]+/gm;
        if(regex.exec(value) === null){
            throw new TypeError("Invalid e-mail");
        }
        else{
            this._email = value;
        }

    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        const regex = /^[a-zA-Z]{3,20}$/gm;
        if(value.length < 3 || value.length > 20){
            throw new TypeError("First name must be between 3 and 20 characters long");
        }
        else if(regex.exec(value) === null){
            throw new TypeError("First name must contain only Latin characters");
        }
        else{
            this._firstName = value;
        }

    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        const regex = /^[a-zA-Z]{3,20}$/gm;
        if(value.length < 3 || value.length > 20){
            throw new TypeError("Last name must be between 3 and 20 characters long");
        }
        else if(regex.exec(value) === null){
            throw new TypeError("Last name must contain only Latin characters");
        }
        else {
            this._lastName = value;
        }
    }
}

let acc = new CheckingAccount('131412', 'ivan@some.com', 'Ivan', 'Petrov');

console.log(acc);