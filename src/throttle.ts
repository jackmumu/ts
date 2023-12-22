const throttle = (func: (this: any, ...args: any[]) => void, delay: number) => {
  let timer: NodeJS.Timeout | null = null;
  return function (this: any, ...args: any[]) {
    console.log("this", this, args);
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};
let _t = throttle(function () {
 
}, 1000);
console.log(_t({ a: 444 }));
