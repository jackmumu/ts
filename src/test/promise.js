"use strict";
var MyPromise = /** @class */ (function () {
    function MyPromise() {
        this.status = "pending";
        this.value = undefined;
        this.reason = undefined;
    }
    return MyPromise;
}());
