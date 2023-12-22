"use strict";
var FactoryPattern;
(function (FactoryPattern) {
    var ConcreteProductA = /** @class */ (function () {
        function ConcreteProductA() {
        }
        ConcreteProductA.prototype.doSomething = function () {
            console.log("ConcreteProductA");
        };
        return ConcreteProductA;
    }());
    var ConcreteProductB = /** @class */ (function () {
        function ConcreteProductB() {
        }
        ConcreteProductB.prototype.doSomething = function () {
            console.log("ConcreteProductB");
        };
        return ConcreteProductB;
    }());
    var Factory = /** @class */ (function () {
        function Factory() {
        }
        Factory.createProduct = function (type) {
            switch (type) {
                case "A":
                    return new ConcreteProductA();
                case "B":
                    return new ConcreteProductB();
                default:
                    throw new Error("No such product");
            }
        };
        return Factory;
    }());
    var productA = Factory.createProduct("A");
    productA.doSomething();
})(FactoryPattern || (FactoryPattern = {}));
var abstractFactoryPattern;
(function (abstractFactoryPattern) {
    var ConcreteFactory1 = /** @class */ (function () {
        function ConcreteFactory1() {
        }
        ConcreteFactory1.prototype.createProductA = function () {
            return new ConcreteProductA1();
        };
        ConcreteFactory1.prototype.createProductB = function () {
            return new ConcreteProductB1();
        };
        return ConcreteFactory1;
    }());
    var ConcreteFactory2 = /** @class */ (function () {
        function ConcreteFactory2() {
        }
        ConcreteFactory2.prototype.createProductA = function () {
            return new ConcreteProductA2();
        };
        ConcreteFactory2.prototype.createProductB = function () {
            return new ConcreteProductB2();
        };
        return ConcreteFactory2;
    }());
    var ConcreteProductA1 = /** @class */ (function () {
        function ConcreteProductA1() {
        }
        ConcreteProductA1.prototype.doSomething = function () {
            console.log("ConcreteProductA1");
        };
        return ConcreteProductA1;
    }());
    var ConcreteProductB1 = /** @class */ (function () {
        function ConcreteProductB1() {
        }
        ConcreteProductB1.prototype.doSomething = function () {
            console.log("ConcreteProductB1");
        };
        return ConcreteProductB1;
    }());
    var ConcreteProductA2 = /** @class */ (function () {
        function ConcreteProductA2() {
        }
        ConcreteProductA2.prototype.doSomething = function () {
            console.log("ConcreteProductA2");
        };
        return ConcreteProductA2;
    }());
    var ConcreteProductB2 = /** @class */ (function () {
        function ConcreteProductB2() {
        }
        ConcreteProductB2.prototype.doSomething = function () {
            console.log("ConcreteProductB2");
        };
        return ConcreteProductB2;
    }());
    var factory1 = new ConcreteFactory1();
    var factory2 = new ConcreteFactory2();
    var productA1 = factory1.createProductA();
    var productB1 = factory1.createProductB();
    var productA2 = factory2.createProductA();
    var productB2 = factory2.createProductB();
    productA1.doSomething();
    productA2.doSomething();
    productB1.doSomething();
    productB2.doSomething();
})(abstractFactoryPattern || (abstractFactoryPattern = {}));
var Singleton = /** @class */ (function () {
    function Singleton() {
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    return Singleton;
}());
