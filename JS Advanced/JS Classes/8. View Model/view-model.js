class Textbox {
    constructor(selector,regex){
        this._elements = $(selector);
        this._invalidSymbols = regex;
        this._value = $(this._elements[0]).val();
        this.onInput();
    }

    onInput() {
        this.elements.on('input', (ev) => {
            this.value = $(ev.target).val();
        })
    }

    get elements() {
        return this._elements;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
        for(let el of this.elements){
            $(el).val(value);
        }
    }

    isValid(){
        return !this._invalidSymbols.test(this.value);
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
console.log(textbox.elements);
console.log(textbox._elements);
console.log(textbox.value);
console.log(textbox.isValid());
let inputs = $('.textbox');

inputs.on('input',function(){console.log(textbox.value);});
