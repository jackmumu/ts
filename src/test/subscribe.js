"use strict";
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
