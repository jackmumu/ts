var Point = /** @class */ (function () {
    function Point(x, y, force) {
        this._force = 1;
        if (typeof x == 'number') {
            this.left = x;
            this.top = y !== null && y !== void 0 ? y : 0;
        }
        else {
            if (!x || x.length < 2) {
                throw new RangeError('Point box length must >= 2');
            }
            this.left = x[0], this.top = x[1];
        }
        this._force = force !== null && force !== void 0 ? force : 1;
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this.left;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this.top;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "force", {
        get: function () {
            return this._force;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
export { Point };
