const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello");
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("error");
  }, 1000);
}).catch((err) => {
    console.log(err);
});
const asy = async () => {
  let suffix = await p;
  console.log(suffix);
  console.log("world");
};
asy();
console.log("start");
