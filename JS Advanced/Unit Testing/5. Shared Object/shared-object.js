let chai = require("chai");
let expect = chai.expect;
let jsdom = require("jsdom-global")();
let $ = require("jquery");




let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

document.body.innerHTML = `<body>
    <div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>
</body>`;

describe("Shared Object Unit Tests",function () {
    describe("Initial value",function () {
        it("prop name to be null",function () {
            expect(sharedObject.name).to.be.null;
        });
        it("prop income to be null",function () {
            expect(sharedObject.income).to.be.null;
        })
    });
    describe("Change name",function () {
        it("with empty string(name should be null)",function () {
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.null;
        });
        it("with non-empty string(name should be input)",function () {
            sharedObject.changeName('Gosho');
            expect(sharedObject.name).to.be.equal('Gosho', 'incorrect input')
        })
    });
    describe("Input name , input tests",function () {
        it("with empty string(name should be null)",function () {
            sharedObject.changeName('Ivaylo');
            sharedObject.changeName('');
            let input = $('#name');
            expect(input.val()).to.be.equal('Ivaylo')
        });
        it("with non-empty string(name should be input)",function () {
            sharedObject.changeName('Gosho');
            let input = $('#name');
            expect(input.val()).to.be.equal('Gosho', 'incorrect input')
        })
    });
    describe("Change income",function () {
        it("with string should return null",function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome('hi');
            expect(sharedObject.income).to.be.equal(5)
        });
        it("with string should return null",function () {
            sharedObject.changeIncome(5);
            expect(sharedObject.income).to.be.equal(5)
        });
        it("with string should return null",function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(4.15);
            expect(sharedObject.income).to.be.equal(5)
        });
        it("with string should return null",function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(-4);
            expect(sharedObject.income).to.be.equal(5)
        });
        it("with string should return null",function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.equal(5)
        });
    });
    describe("Income input tests",function () {
        it("with string should not return correctly",function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome('');
            let inputIncome = $('#income');
            expect(inputIncome.val()).to.be.equal('5')

        });
        it("with string should not return correctly",function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome('hi');
            let inputIncome = $('#income');
            expect(inputIncome.val()).to.be.equal('5')
        });
        it("with floating point should not return correctly",function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(3.4);
            let inputIncome = $('#income');
            expect(inputIncome.val()).to.be.equal('5')
        });
        it("with negative number should not return correctly",function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(-4);
            let inputIncome = $('#income');
            expect(inputIncome.val()).to.be.equal('5')
        });
        it("with zero should not return correctly",function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(0);
            let inputIncome = $('#income');
            expect(inputIncome.val()).to.be.equal('5')
        })
    });
    describe('Update Name',function () {
        it("with an emptys tring should not change property",function () {
            sharedObject.changeName('ivaylo');
            let inputUpdateName = $('#name');
            inputUpdateName.val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('ivaylo')
        });
        it("with non-emptys tring should not change property",function () {
            sharedObject.changeName('Gosho');
            let element = $('#name');
            element.val('Ivaylo');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Ivaylo')
        })
    });
    describe("Update Income tests",function () {
        it("with an empty string",function () {
            sharedObject.changeIncome(3);
            let element = $('#income');
            element.val('hello');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3)
        });
        it("with a floating point",function () {
            sharedObject.changeIncome(3);
            let element = $('#income');
            element.val(3.11);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3)
        });
        it("with a negative number ",function () {
            sharedObject.changeIncome(3);
            let element = $('#income');
            element.val('-3');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3)
        });
        it("with a zero",function () {
            sharedObject.changeIncome(3);
            let element = $('#income');
            element.val('0');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3)
        });
        it("with a correct point",function () {
            sharedObject.changeIncome(3);
            let element = $('#income');
            element.val('5');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(5)
        })
    })
});

