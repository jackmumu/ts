"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a;
function limitRange(v, min, max) {
    return Math.min(max, Math.max(min, v));
}
function isNumber(v) {
    return typeof v == "number" && !Number.isNaN(v);
}
//https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
var RGBColor = /** @class */ (function () {
    function RGBColor(r, g, b, a) {
        if (a === void 0) { a = 255; }
        this.R = limitRange(r, 0, 255);
        this.G = limitRange(g, 0, 255);
        this.B = limitRange(b, 0, 255);
        this.A = limitRange(a, 0, 255);
    }
    Object.defineProperty(RGBColor.prototype, "red", {
        get: function () {
            return this.R;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RGBColor.prototype, "green", {
        get: function () {
            return this.G;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RGBColor.prototype, "blue", {
        get: function () {
            return this.B;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RGBColor.prototype, "alpha", {
        get: function () {
            return this.A;
        },
        enumerable: false,
        configurable: true
    });
    RGBColor.prototype.equal = function (c) {
        return this.R == c.R && this.G == c.G && this.B == c.B && this.A == c.A;
    };
    RGBColor.prototype.toCSS = function (type) {
        if (type === void 0) { type = "rgba"; }
        switch (type) {
            case "rgba":
                return "rgba(".concat(this.R, ",").concat(this.G, ",").concat(this.B, ",").concat(Math.round((this.A * 100) / 255) / 100, ")");
            case "rgb":
                return "rgb(".concat(this.R, ",").concat(this.G, ",").concat(this.B, ")");
            case "hex":
                var rgb = "#".concat(this.R.toString(16).padStart(2, "0")).concat(this.G.toString(16).padStart(2, "0")).concat(this.B.toString(16).padStart(2, "0"));
                if (this.A == 255) {
                    return rgb;
                }
                return rgb + this.A.toString(16).padStart(2, "0");
        }
    };
    RGBColor.prototype.toARGB = function () {
        return (this.A << 24) | (this.R << 16) | (this.G << 8) | this.B;
    };
    RGBColor.prototype.toRGBA = function () {
        return (this.R << 24) | (this.G << 16) | (this.B << 8) | this.A;
    };
    RGBColor.random = function (range, withAlpha) {
        if (range === void 0) { range = [0, 255]; }
        if (withAlpha === void 0) { withAlpha = false; }
        var rand = function () {
            return Math.floor(Math.random() * (range[1] + 1 - range[0])) + range[0];
        };
        return new RGBColor(rand(), rand(), rand(), withAlpha ? rand() : undefined);
    };
    RGBColor.fromARGB = function (v) {
        return new RGBColor((v >> 16) & 0xff, (v >> 8) & 0xff, v & 0xff, (v >> 24) & 0xff);
    };
    RGBColor.fromRGBA = function (v) {
        return new RGBColor((v >> 24) & 0xff, (v >> 16) & 0xff, (v >> 8) & 0xff, v & 0xff);
    };
    RGBColor.parseHex = function (v) {
        //#RGB[A] or#RRGGBB[AA]
        var rgba = v.substring(1);
        var array = rgba.length <= 4
            ? rgba.match(/.{1}/g) //#RGB[A]
            : rgba.match(/.{2}/g); //#RRGGBB[AA]
        if (array) {
            var _a = array
                .map(function (i) { return i.trim(); })
                .map(function (i) { return Number.parseInt(i.length == 1 ? i + i : i, 16); }), r = _a[0], g = _a[1], b_1 = _a[2], a_1 = _a[3];
            if (Number.isInteger(r) && Number.isInteger(g) && Number.isInteger(b_1)) {
                return new RGBColor(r, g, b_1, Number.isInteger(a_1) ? a_1 : 255);
            }
        }
        return null;
    };
    RGBColor.parseRGB = function (v) {
        //rgb[a](R, G, B[, A]) or rgb[a](R G B[ / A])
        var rgb = v.substring(v.indexOf("(") + 1, v.indexOf(")"));
        var _a = rgb
            .split(/[,\s\/]+/)
            .map(function (i) { return i.trim(); })
            .map(function (i) {
            if (i.endsWith("%")) {
                return -1 * Math.round((Number.parseFloat(i) * 255) / 100);
            }
            else {
                return Number.parseFloat(i);
            }
        }), r = _a[0], g = _a[1], b = _a[2], a = _a[3];
        if (isNumber(r) && isNumber(g) && isNumber(b)) {
            var alpha = 255;
            if (isNumber(a)) {
                if (a < 0) {
                    alpha = Math.abs(a);
                }
                else {
                    alpha = Math.round(a * 255);
                }
            }
            return new RGBColor(Math.abs(r), Math.abs(g), Math.abs(b), alpha);
        }
        return null;
    };
    RGBColor.parseCSS = function (v) {
        if (v && v.length) {
            var lv = v.trim().toLowerCase();
            if (lv == "transparent") {
                return RGBColor.TRANSPARENT;
            }
            else if (lv == "none") {
                return null;
            }
            if (lv.startsWith("#")) {
                return RGBColor.parseHex(lv);
            }
            else if (lv.startsWith("rgb(") || lv.startsWith("rgba(")) {
                return RGBColor.parseRGB(lv);
            }
        }
        return null;
    };
    RGBColor.BLACK = new RGBColor(0, 0, 0);
    RGBColor.WHITE = new RGBColor(255, 255, 255);
    RGBColor.TRANSPARENT = new RGBColor(0, 0, 0, 0);
    return RGBColor;
}());
var a = "rgb(255, 255, 255)";
var b = "rgba(255, 255, 255, 0.5)";
var arr2 = (_a = a.match(/\d+(\.\d+)?/g)) !== null && _a !== void 0 ? _a : [255, 255, 255];
var o = new (RGBColor.bind.apply(RGBColor, __spreadArray([void 0], arr2, false)))();
