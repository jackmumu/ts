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
var Base = /** @class */ (function (_super) {
    __extends(Base, _super);
    function Base(e) {
        return _super.call(this, e) || this;
    }
    /**
     * 生成元素的 xml
     */
    Base.prototype.toXML = function () {
        return api.xml.stringify(this.element);
    };
    /**
     * 使元素显示
     */
    Base.prototype.show = function () {
        var dv = this.attr.get('display');
        if (dv && dv != 'inline') {
            this.attr.set('display', 'inline');
        }
        var vv = this.attr.get('visibility');
        if (vv && vv != 'visible') {
            this.attr.set('visibility', 'visible');
        }
        return this;
    };
    /**
     * 隐藏自身
     * @param fake 是否只隐藏, 但是仍然占位, 默认是 false
     */
    Base.prototype.hide = function (fake) {
        if (fake === void 0) { fake = false; }
        if (fake) {
            this.attr.set('visibility', 'hidden');
        }
        else {
            this.attr.set('display', 'none');
        }
        return this;
    };
    Object.defineProperty(Base.prototype, "title", {
        /** 获取元素的 title */
        get: function () {
            var _a, _b;
            return (_b = (_a = this.query('title')) === null || _a === void 0 ? void 0 : _a.textContent) !== null && _b !== void 0 ? _b : '';
        },
        /** 设置元素的 title */
        set: function (v) {
            if (v && v.length) {
                var title = this.query('title');
                if (!title) {
                    title = create('title');
                    this.element.appendChild(title);
                }
                title.textContent = v;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Base;
}(dom.Base));
