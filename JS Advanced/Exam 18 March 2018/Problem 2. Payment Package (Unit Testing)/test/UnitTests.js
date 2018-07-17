const expect = require('chai').expect;
const PaymentPackage = require("../scriptToTest");

describe('Unit Testing',function () {
    describe('constructing',function () {
        it('checking valid constructor',function () {
            let err=function () {
                let package=new PaymentPackage('HR Services', 1500);
            }
            expect(err).to.not.throw(Error)

        });
        it('checking constructor with diff inputs',function () {
            let err =function () {
                let package = new PaymentPackage('Mariyan')
            }
            expect(err).to.throw(Error,/Value must be a non-negative number/)
            let err2 =function () {
                let package = new PaymentPackage()
            }
            expect(err2).to.throw(Error,/Name must be a non-empty string/)
            let err3 = function () {
                let package = new PaymentPackage('Mariyan',1500,432)
            }
            expect(err3).to.not.throw(Error)
            let err4 = function () {
                let package = new PaymentPackage('Mariyan',1500,'432')
            }
            expect(err4).to.not.throw(Error)
        })
        it('checking invalid constructor',function () {
            let err=function(){
                let package=new PaymentPackage('', 1500);
            };
            expect(err).to.throw(Error,/Name must be a non-empty string/)
            let err1=function(){
                let package=new PaymentPackage('HR Services', -1);
            };
            expect(err1).to.throw(Error,/Value must be a non-negative number/)
            let err2=function(){
                let package=new PaymentPackage('HR Services', []);
            };
            expect(err2).to.throw(Error,/Value must be a non-negative number/)
            let err3=function(){
                let package=new PaymentPackage('HR Services', 'asd');
            };
            expect(err3).to.throw(Error,/Value must be a non-negative number/)
            let err4=function(){
                let package=new PaymentPackage([], 23);
            };
            expect(err4).to.throw(Error,/Name must be a non-empty string/)
        });
        it('checking invalid name',function () {
            let package=new PaymentPackage('HR Services', 1500);
            let err=function(){
                package.name='';
            };
            expect(err).to.throw(Error,/Name must be a non-empty string/)
            let err1=function(){
                package.name=0;
            };
            expect(err1).to.throw(Error,/Name must be a non-empty string/)
            let err2=function(){
                package.name=[];
            };
            expect(err2).to.throw(Error,/Name must be a non-empty string/)
        });
        it('checking invalid value',function () {
            let package=new PaymentPackage('HR Services', 1500);
            let err=function(){
                package.value=-1;
            };
            expect(err).to.throw(Error,/Value must be a non-negative number/)
            let err1=function(){
                package.value='1';
            };
            expect(err1).to.throw(Error,/Value must be a non-negative number/)
            let err2=function(){
                package.value=[];
            };
            expect(err2).to.throw(Error,/Value must be a non-negative number/)
        });
        it('checking valid getters and setters for name and value',function () {
            let package=new PaymentPackage('HR Services', 1500);
            package.name='Pesho';
            package.value=1000;
            expect(package.name).to.be.equal('Pesho');
            expect(package.value).to.be.equal(1000);
            package.value=0;
            expect(package.value).to.be.equal(0);
            expect(package.VAT).to.be.equal(20);
            package.VAT=30;
            expect(package.VAT).to.be.equal(30);
            package.VAT=3.2;
            expect(package.VAT).to.be.equal(3.2);
            package.VAT=0;
            expect(package.VAT).to.be.equal(0);

        })
        it('checking getters and setters for VAT and active',function () {
            let package=new PaymentPackage('HR Services', 1500);
            expect(package.VAT).to.be.equal(20);
            package.VAT=30;
            expect(package.VAT).to.be.equal(30);
            expect(package.active).to.be.equal(true);
            package.active=false;
            expect(package.active).to.be.equal(false);
        })
        it('checking invalid VAT',function () {
            let package=new PaymentPackage('HR Services', 1500);
            let err = function () {
                package.VAT=-1;
            }
            expect(err).to.throw(Error,/VAT must be a non-negative number/)
            let err1 = function () {
                package.VAT='as';
            }
            expect(err1).to.throw(Error,/VAT must be a non-negative number/)
            let err2 = function () {
                package.VAT=[];
            }
            expect(err2).to.throw(Error,/VAT must be a non-negative number/)
            let err3 = function () {
                package.VAT=true;
            }
            expect(err3).to.throw(Error,/VAT must be a non-negative number/)
        })
        it('checking invalid active',function () {
            let package=new PaymentPackage('HR Services', 1500);
            let err = function () {
                package.active=-1;
            }
            expect(err).to.throw(Error,/Active status must be a boolean/)
            let err1 = function () {
                package.active='as';
            }
            expect(err1).to.throw(Error,/Active status must be a boolean/)
            let err2 = function () {
                package.active=[];
            }
            expect(err2).to.throw(Error,/Active status must be a boolean/)
            let err3 = function () {
                package.active=null;
            }
            expect(err3).to.throw(Error,/Active status must be a boolean/)
            let err4 = function () {
                package.active=undefined;
            }
            expect(err4).to.throw(Error,/Active status must be a boolean/)
        })
        it('checking toString()',function () {
            let package=new PaymentPackage('Mariyan', 1000);
            expect(package.toString()).to.be.equal('Package: Mariyan\n- Value (excl. VAT): 1000\n- Value (VAT 20%): 1200')
            package.active=false;
            package.VAT=10;
            expect(package.toString()).to.be.equal('Package: Mariyan (inactive)\n- Value (excl. VAT): 1000\n- Value (VAT 10%): 1100')
        })
    })
});
