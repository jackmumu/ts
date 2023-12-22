/**
 * reduce实现累加器
 */
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.reduce((pre, cur) => {
  console.log(pre, cur);
  return pre + cur;
}, 0);
/**
 * reduce 实现最大值
 */
const res = arr.reduce((pre, cur) => {
  return pre > cur ? pre : cur;
}, arr[0]);
console.log(`最大值--${res}`);
