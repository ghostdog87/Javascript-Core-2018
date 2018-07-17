const expect = require("chai").expect;
const Calculator = require("../testThis");

describe("Calculator tests", function() {

    describe("Constructor tests", function () {
        it("Should be initialized correctly", function() {
            const calc = new Calculator();
            expect(calc.expenses).to.be.empty;
        });
    });

    describe("Add data tests", function () {
        it("Should return new arr", function() {
            const calc = new Calculator();
            calc.add(10);
            calc.add("Pesho");
            calc.add("5");
            expect(calc.toString()).to.equal("10 -> Pesho -> 5");
        });
    });

    describe("divideNums tests", function () {
        it("no numbers throw error", function() {
            let err=function () {
                let calc=new Calculator();
                calc.add("Pesho");
                calc.add("5");
                calc.divideNums()
            };
            expect(err).to.throw("There are no numbers in the array!");
        });
        it("empty arr throw error", function() {
            let err=function () {
                let calc=new Calculator();
                calc.divideNums()
            };
            expect(err).to.throw("There are no numbers in the array!");
        });
        it("devide by zero throw error", function() {
            let calc=new Calculator();
            calc.add(10);
            calc.add("Pesho");
            calc.add("5");
            calc.add(0);
            expect(calc.divideNums()).to.equal("Cannot divide by zero");
        });

        it("devide by float throw error", function() {
            let calc=new Calculator();
            calc.add(0.5);
            calc.add("Pesho");
            calc.add("5");
            calc.add(10);
            expect(calc.divideNums()).to.be.closeTo(0.05,0.01);
        });
        it("devide by negative throw error", function() {
            let calc=new Calculator();
            calc.add(0.5);
            calc.add("Pesho");
            calc.add("5");
            calc.add(-10);
            expect(calc.divideNums()).to.be.closeTo(-0.05,0.01);
        });
        it("devide with negative throw error", function() {
            let calc=new Calculator();
            calc.add(-0.5);
            calc.add("Pesho");
            calc.add("5");
            calc.add(-10);
            expect(calc.divideNums()).to.be.closeTo(0.05,0.01);
        });
        it("devide with int throw error", function() {
            let calc=new Calculator();
            calc.add(10);
            calc.add("Pesho");
            calc.add("5");
            calc.add(5);
            expect(calc.divideNums()).to.be.closeTo(2,0.01);
        });
    });

    describe("to string tests", function () {
        it("Should return correct", function() {
            const calc = new Calculator();
            calc.add(10);
            calc.add("Pesho");
            calc.add("5");
            calc.add(1);
            expect(calc.toString()).to.equal("10 -> Pesho -> 5 -> 1");
        });
        it("Should return empty", function() {
            const calc = new Calculator();
            expect(calc.toString()).to.equal("empty array");
        });
    });

    describe("sorting tests", function () {
        it("Should return correct1", function() {
            const calc = new Calculator();
            calc.add(10);
            calc.add("Pesho");
            calc.add("5");
            calc.add(1);
            calc.divideNums();
            calc.add(1);
            expect(calc.orderBy()).to.equal("1, 10");
        });
        it("Should return correct2", function() {
            const calc = new Calculator();
            calc.add(10);
            calc.add("Pesho");
            calc.add("5");
            calc.add(1);
            calc.add(1.05);
            expect(calc.orderBy()).to.equal("1, 1.05, 10, 5, Pesho");
        });
        it("Should return correct3", function() {
            const calc = new Calculator();
            calc.add("Pesho");
            calc.add("5");
            expect(calc.orderBy()).to.equal("5, Pesho");
        });
        it("Should return correct4", function() {
            const calc = new Calculator();
            calc.add(-10);
            calc.add("Pesho");
            calc.add("5");
            calc.add(-1);
            calc.add(-1.05);
            expect(calc.orderBy()).to.equal("-1, -1.05, -10, 5, Pesho");
        });
    });
});




