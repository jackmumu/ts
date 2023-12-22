"use strict";
var throttle = function (func, delay) {
    var timer = null;
    return function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log("this", this, args);
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            func.apply(_this, args);
        }, delay);
    };
};
var _t = throttle(function () {
}, 1000);
console.log(_t({ a: 444 }));
