"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * 工厂模式
 * 根据一个上下文类的静态方法，传入不同的参数返回不同的实例
 */
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
/**
 * 抽象工厂模式
 * 直接提供一个实体类的工厂，调用不同的方法返回不同的实例
 */
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
/**
 * 单例模式 提供一个实体类的静态方法返回一个静态实例
 */
var SingletonPattern;
(function (SingletonPattern) {
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
    var s1 = Singleton.getInstance(), s2 = Singleton.getInstance();
    console.log(s1 === s2);
})(SingletonPattern || (SingletonPattern = {}));
/**
 * 建造者模式
 * 根据创建者的不同函数构造复杂对象，调用getProduct返回实例并重置实例
 */
var BuilderPattern;
(function (BuilderPattern) {
    var Product = /** @class */ (function () {
        function Product() {
            this.parts = [];
        }
        Product.prototype.listParts = function () {
            console.log("Product parts: ".concat(this.parts.join(", "), "\n"));
        };
        return Product;
    }());
    var Builder = /** @class */ (function () {
        function Builder() {
            this.product = new Product();
        }
        Builder.prototype.reset = function () {
            this.product = new Product();
        };
        Builder.prototype.buildPartA = function () {
            this.product.parts.push("PartA");
        };
        Builder.prototype.buildPartB = function () {
            this.product.parts.push("PartB");
        };
        Builder.prototype.getProduct = function () {
            var result = this.product;
            this.reset();
            return result;
        };
        return Builder;
    }());
    var b = new Builder();
    b.buildPartA();
    b.buildPartB();
    var product = b.getProduct();
    product.listParts();
    var product2 = b.getProduct();
    product2.listParts();
})(BuilderPattern || (BuilderPattern = {}));
/**
 * 策略模式
 */
var StrategyPattern;
(function (StrategyPattern) {
    var MemberShip = /** @class */ (function () {
        function MemberShip() {
        }
        MemberShip.prototype.calculateDiscout = function (price) {
            throw new Error("Not implemented yet");
        };
        return MemberShip;
    }());
    var BronzeMemberShip = /** @class */ (function (_super) {
        __extends(BronzeMemberShip, _super);
        function BronzeMemberShip() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        BronzeMemberShip.prototype.calculateDiscout = function (price) {
            return price * 0.1;
        };
        return BronzeMemberShip;
    }(MemberShip));
    var SilverMemberShip = /** @class */ (function (_super) {
        __extends(SilverMemberShip, _super);
        function SilverMemberShip() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SilverMemberShip.prototype.calculateDiscout = function (price) {
            return price * 0.2;
        };
        return SilverMemberShip;
    }(MemberShip));
    var GoldMemberShip = /** @class */ (function (_super) {
        __extends(GoldMemberShip, _super);
        function GoldMemberShip() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        GoldMemberShip.prototype.calculateDiscout = function (price) {
            return price * 0.5;
        };
        return GoldMemberShip;
    }(MemberShip));
    var discoutContext = /** @class */ (function () {
        function discoutContext(memberShip) {
            switch (memberShip) {
                case "bronze":
                    this.strategy = new BronzeMemberShip();
                    break;
                case "silver":
                    this.strategy = new SilverMemberShip();
                    break;
                case "gold":
                    this.strategy = new GoldMemberShip();
                    break;
                default:
                    this.strategy = new MemberShip();
            }
        }
        discoutContext.prototype.calculateDiscout = function (price) {
            return this.strategy.calculateDiscout(price);
        };
        return discoutContext;
    }());
    console.log(new discoutContext("bronze").calculateDiscout(1000));
    console.log(new discoutContext("silver").calculateDiscout(1000));
    console.log(new discoutContext("gold").calculateDiscout(1000));
    /**
     * 策略模式 函数实现
     */
    var FunctionStrategy;
    (function (FunctionStrategy) {
        var strategy = {
            bike: function () {
                console.log("bike");
            },
            electromobile: function () {
                console.log("electromobile");
            },
            car: function () {
                console.log("car");
            },
        };
        var travel = function (way) {
            var strategyFunc = strategy[way];
            if (!strategyFunc) {
                throw new Error("way is not found");
            }
            return strategyFunc();
        };
        travel("bike");
        travel("electromobile");
        travel("car");
    })(FunctionStrategy = StrategyPattern.FunctionStrategy || (StrategyPattern.FunctionStrategy = {}));
})(StrategyPattern || (StrategyPattern = {}));
/**
 * 发布订阅模式 利用中介（消息代理与或事件通道）与订阅者耦合性较低
 */
var SubScribeStrategy;
(function (SubScribeStrategy) {
    var ConcreteSubscribe = /** @class */ (function () {
        function ConcreteSubscribe() {
        }
        ConcreteSubscribe.prototype.update = function (data) {
            console.log("update - ".concat(data));
        };
        return ConcreteSubscribe;
    }());
    var publish = /** @class */ (function () {
        function publish() {
            this.subscribes = {};
        }
        publish.prototype.subscribe = function (event, subscribe) {
            !this.subscribes[event] && (this.subscribes[event] = []);
            this.subscribes[event].push(subscribe);
        };
        publish.prototype.publish = function (event, data) {
            var subscribers = this.subscribes[event];
            subscribers &&
                subscribers.forEach(function (subscribe) {
                    subscribe.update(data);
                });
        };
        return publish;
    }());
    var pub = new publish();
    var sub = new ConcreteSubscribe();
    var sub2 = new ConcreteSubscribe();
    pub.subscribe("event", sub);
    pub.subscribe("event", sub2);
    pub.publish("event", "hello world");
})(SubScribeStrategy || (SubScribeStrategy = {}));
/**
 * 观察者模式
 */
var ObserverPattern;
(function (ObserverPattern) {
    var ConcreteObserver = /** @class */ (function () {
        function ConcreteObserver(s) {
            this.componentName = s !== null && s !== void 0 ? s : "";
        }
        ConcreteObserver.prototype.update = function (message) {
            console.log("".concat(this.componentName, " - ").concat(message));
        };
        return ConcreteObserver;
    }());
    var Subject = /** @class */ (function () {
        function Subject() {
            this.observers = [];
        }
        Subject.prototype.addObserver = function (observer) {
            this.observers.push(observer);
        };
        Subject.prototype.notify = function (message) {
            this.observers.forEach(function (observer) {
                observer.update(message);
            });
        };
        return Subject;
    }());
    var subject = new Subject();
    var observer1 = new ConcreteObserver("app");
    var observer2 = new ConcreteObserver("");
    subject.addObserver(observer1);
    subject.notify("hello world");
})(ObserverPattern || (ObserverPattern = {}));
