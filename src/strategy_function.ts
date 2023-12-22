const strategy = {
  bike: () => {
    console.log("bike");
  },
  electromobile: () => {
    console.log("electromobile");
  },
  car: () => {
    console.log("car");
  },
};
const travel = (way: "bike" | "electromobile" | "car") => {
  const strategyFunc = strategy[way];
  if (!strategyFunc) {
    throw new Error("way is not found");
  }
  return strategyFunc();
};
travel("bike");
travel("electromobile");
travel("car");
