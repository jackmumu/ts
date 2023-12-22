"use strict";
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
