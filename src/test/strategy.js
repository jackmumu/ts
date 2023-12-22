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
