"use strict";
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
