"use strict";
/**
 * reduce实现累加器
 */
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.reduce(function (pre, cur) {
    console.log(pre, cur);
    return pre + cur;
}, 0);
/**
 * reduce 实现最大值
 */
var res = arr.reduce(function (pre, cur) {
    return pre > cur ? pre : cur;
}, arr[0]);
console.log("\u6700\u5927\u503C--".concat(res));
