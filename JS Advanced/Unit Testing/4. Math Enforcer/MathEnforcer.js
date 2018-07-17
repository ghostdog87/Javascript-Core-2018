let expect = require("chai").expect;

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};

describe("mathEnforcer",function () {
    describe("addFive",function () {
        it('with a non-number parameter, should return incorrect result',function () {
            expect(mathEnforcer.addFive("pesho")).to.equal(undefined,"The function did not return the correct result!");
        });
        it('with a non-number parameter, should return incorrect result',function () {
            expect(mathEnforcer.addFive({name: "pesho"})).to.equal(undefined,"The function did not return the correct result!");
        });
        it('with a number parameter, should return correct result',function () {
            expect(mathEnforcer.addFive(5)).to.equal(10,"The function did return the correct result!");
        });
        it('with a number parameter, should return correct result',function () {
            expect(mathEnforcer.addFive(-5)).to.equal(0,"The function did return the correct result!");
        });
        it('with a number parameter, should return correct result',function () {
            expect(mathEnforcer.addFive(5.56)).to.be.closeTo(10.56,0.01,"The function did return the correct result!");
        });
    });

    describe("subtractTen",function () {
        it('with a non-number parameter, should return incorrect result',function () {
            expect(mathEnforcer.subtractTen("pesho")).to.equal(undefined,"The function did not return the correct result!");
        });
        it('with a non-number parameter, should return incorrect result',function () {
            expect(mathEnforcer.subtractTen({name: "pesho"})).to.equal(undefined,"The function did not return the correct result!");
        });
        it('with a number parameter, should return correct result',function () {
            expect(mathEnforcer.subtractTen(5)).to.equal(-5,"The function did return the correct result!");
        });
        it('with a number parameter, should return correct result',function () {
            expect(mathEnforcer.subtractTen(-5)).to.equal(-15,"The function did return the correct result!");
        });
        it('with a number parameter, should return correct result',function () {
            expect(mathEnforcer.subtractTen(5.55)).to.be.closeTo(-4.45,0.01,"The function did return the correct result!");
        });
    });

    describe("sum",function () {
        it('with a non-number parameter, should return incorrect result',function () {
            expect(mathEnforcer.sum("pesho","gosho")).to.equal(undefined,"The function did not return the correct result!");
        });
        it('with a non-number parameter, should return incorrect result',function () {
            expect(mathEnforcer.sum(5,"gosho")).to.equal(undefined,"The function did not return the correct result!");
        });
        it('with a non-number parameter, should return incorrect result',function () {
            expect(mathEnforcer.sum("gosho",5)).to.equal(undefined,"The function did not return the correct result!");
        });
        it('with a number parameter, should return correct result',function () {
            expect(mathEnforcer.sum(5,5)).to.equal(10,"The function did return the correct result!");
        });
        it('with a number parameter, should return correct result',function () {
            expect(mathEnforcer.sum(-5,5)).to.equal(0,"The function did return the correct result!");
        });
        it('with a number parameter, should return correct result',function () {
            expect(mathEnforcer.sum(5.50,6.76)).to.be.closeTo(12.26,0.01,"The function did return the correct result!");
        });
    });
});