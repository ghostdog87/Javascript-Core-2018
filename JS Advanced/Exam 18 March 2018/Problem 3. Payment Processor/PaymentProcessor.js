class PaymentProcessor {
    constructor(){
        this.allPaymentIDs = {};

        this.options = {
            types: ["service", "product", "other"],
            precision: 2
        };
    }


    set types(value) {
        if(!this._types.hasOwnProperty(value)){
            this._types =["service", "product", "other"];
        }
        this._types = value;
    }

    set precision(value) {
        if(!this._precision.hasOwnProperty(value)){
            this._precision = 2;
        }
        this._precision = value;
    }

    registerPayment(id, name, type, value){
        if(id === "" || name === "" || !this.options.types.includes(type) || isNaN(value) || this.options.types.length === 0){
            throw new Error("invalid type");
        }

        this.payment = {
            name: name,
            type: type,
            value: value
        };

        if(!this.allPaymentIDs.hasOwnProperty(id))
        {
            this.allPaymentIDs[id] = this.payment;
        }
        else{
            throw new Error("Adding duplicate ID should throw");
        }
    }

    deletePayment(id){
        if(this.allPaymentIDs.hasOwnProperty(id))
        {
            delete this.allPaymentIDs[id];
        }
        else{
            throw new Error("ID not found");
        }
    }

    get(id){
        if(this.allPaymentIDs.hasOwnProperty(id))
        {
            return `Details about payment ID: ${id}\n`+
            `- Name: ${this.allPaymentIDs[id].name}\n`+
            `- Type: ${this.allPaymentIDs[id].type}\n`+
            `- Value: ${this.allPaymentIDs[id].value.toFixed(Number(this.options.precision))}\n`;

        }
        else{
            throw new Error("ID not found");
        }
    }

    setOptions(options){
        if(options.hasOwnProperty("types")){
            this.options.types = options.types;
        }
        if(options.hasOwnProperty("precision")){
            this.options.precision = options.precision;
        }
    }

    toString(){
        let sum = 0;

        for(let el of Object.keys(this.allPaymentIDs)){
            sum += this.allPaymentIDs[el].value;
        }
        return `Summary:\n`+
                `- Payments: ${Object.keys(this.allPaymentIDs).length}\n`+
                `- Balance: ${sum.toFixed(Number(this.options.precision))}\n`;
    }
}

// Initialize processor with default options
const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
console.log(generalPayments.toString());

// Should throw an error (invalid type)
//generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);

generalPayments.setOptions({types: ['product', 'material']});
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
console.log(generalPayments.get('E028'));
generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);

// Should throw an error (ID not found)
//generalPayments.deletePayment('E027');
// Should throw an error (ID not found)
//generalPayments.get('E027');

generalPayments.deletePayment('E028');
console.log(generalPayments.toString());

// Initialize processor with custom types
const servicePyaments = new PaymentProcessor({types: ['service']});
servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
console.log(servicePyaments.toString());

// Initialize processor with custom precision
const transactionLog = new PaymentProcessor({precision: 5});
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
console.log(transactionLog.toString());

