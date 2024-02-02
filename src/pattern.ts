/**
 * 工厂模式
 * 根据一个上下文类的静态方法，传入不同的参数返回不同的实例
 */
namespace FactoryPattern {
  interface Product {
    doSomething(): void;
  }
  class ConcreteProductA implements Product {
    doSomething() {
      console.log("ConcreteProductA");
    }
  }
  class ConcreteProductB implements Product {
    doSomething(): void {
      console.log("ConcreteProductB");
    }
  }
  class Factory {
    static createProduct(type: string): Product {
      switch (type) {
        case "A":
          return new ConcreteProductA();
        case "B":
          return new ConcreteProductB();
        default:
          throw new Error("No such product");
      }
    }
  }
  const productA = Factory.createProduct("A");
  productA.doSomething();
}
/**
 * 抽象工厂模式
 * 直接提供一个实体类的工厂，调用不同的方法返回不同的实例
 */
namespace abstractFactoryPattern {
  interface Factory {
    createProductA(): ProductA;
    createProductB(): ProductB;
  }
  interface ProductA {
    doSomething(): void;
  }
  interface ProductB {
    doSomething(): void;
  }
  class ConcreteFactory1 implements Factory {
    createProductA(): ProductA {
      return new ConcreteProductA1();
    }
    createProductB(): ProductB {
      return new ConcreteProductB1();
    }
  }
  class ConcreteFactory2 implements Factory {
    createProductA(): ProductA {
      return new ConcreteProductA2();
    }
    createProductB(): ProductB {
      return new ConcreteProductB2();
    }
  }
  class ConcreteProductA1 implements ProductA {
    doSomething() {
      console.log("ConcreteProductA1");
    }
  }
  class ConcreteProductB1 implements ProductB {
    doSomething() {
      console.log("ConcreteProductB1");
    }
  }
  class ConcreteProductA2 implements ProductA {
    doSomething() {
      console.log("ConcreteProductA2");
    }
  }
  class ConcreteProductB2 implements ProductB {
    doSomething() {
      console.log("ConcreteProductB2");
    }
  }
  const factory1 = new ConcreteFactory1();
  const factory2 = new ConcreteFactory2();
  const productA1 = factory1.createProductA();
  const productB1 = factory1.createProductB();
  const productA2 = factory2.createProductA();
  const productB2 = factory2.createProductB();
  productA1.doSomething();
  productA2.doSomething();
  productB1.doSomething();
  productB2.doSomething();
}
/**
 * 单例模式 提供一个实体类的静态方法返回一个静态实例
 */
namespace SingletonPattern {
  class Singleton {
    private static instance: Singleton;
    private constructor() {}
    public static getInstance(): Singleton {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }
      return Singleton.instance;
    }
  }
  const s1 = Singleton.getInstance(),
    s2 = Singleton.getInstance();
  console.log(s1 === s2);
}
/**
 * 建造者模式
 * 根据创建者的不同函数构造复杂对象，调用getProduct返回实例并重置实例
 */
namespace BuilderPattern {
  class Product {
    public parts: Array<string> = [];
    public listParts() {
      console.log(`Product parts: ${this.parts.join(", ")}\n`);
    }
  }
  class Builder {
    product: Product;
    public reset() {
      this.product = new Product();
    }
    constructor() {
      this.product = new Product();
    }
    buildPartA() {
      this.product.parts.push("PartA");
    }
    buildPartB() {
      this.product.parts.push("PartB");
    }
    getProduct(): Product {
      const result = this.product;
      this.reset();
      return result;
    }
  }
  const b = new Builder();
  b.buildPartA();
  b.buildPartB();
  const product = b.getProduct();
  product.listParts();
  const product2 = b.getProduct();
  product2.listParts();
}
/**
 * 策略模式
 */
namespace StrategyPattern {
  class MemberShip {
    calculateDiscout(price: number) {
      throw new Error("Not implemented yet");
    }
  }
  class BronzeMemberShip extends MemberShip {
    calculateDiscout(price: number) {
      return price * 0.1;
    }
  }
  class SilverMemberShip extends MemberShip {
    calculateDiscout(price: number) {
      return price * 0.2;
    }
  }
  class GoldMemberShip extends MemberShip {
    calculateDiscout(price: number) {
      return price * 0.5;
    }
  }
  class discoutContext {
    strategy: MemberShip;
    constructor(memberShip: string) {
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
    calculateDiscout(price: number) {
      return this.strategy.calculateDiscout(price);
    }
  }
  console.log(new discoutContext("bronze").calculateDiscout(1000));
  console.log(new discoutContext("silver").calculateDiscout(1000));
  console.log(new discoutContext("gold").calculateDiscout(1000));
  /**
   * 策略模式 函数实现
   */
  export namespace FunctionStrategy {
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
  }
}
/**
 * 发布订阅模式 利用中介（消息代理与或事件通道）与订阅者耦合性较低
 */
namespace SubScribeStrategy {
  interface subscribe {
    update: (data: string) => void;
  }
  class ConcreteSubscribe implements subscribe {
    update(data: any): void {
      console.log(`update - ${data}`);
    }
  }
  class publish {
    private subscribes: { [event: string]: subscribe[] } = {};
    subscribe(event: string, subscribe: subscribe) {
      !this.subscribes[event] && (this.subscribes[event] = []);
      this.subscribes[event].push(subscribe);
    }
    publish(event: string, data: any) {
      const subscribers = this.subscribes[event];
      subscribers &&
        subscribers.forEach((subscribe) => {
          subscribe.update(data);
        });
    }
  }
  const pub = new publish();
  const sub = new ConcreteSubscribe();
  const sub2 = new ConcreteSubscribe();
  pub.subscribe("event", sub);
  pub.subscribe("event", sub2);
  pub.publish("event", "hello world");
}
/**
 * 观察者模式
 */
namespace ObserverPattern {
  interface Observer {
    update: (data: string) => void;
  }

  class ConcreteObserver implements Observer {
    componentName: string;
    update(message: string): void {
      console.log(`${this.componentName} - ${message}`);
    }
    constructor(s?: string) {
      this.componentName = s ?? "";
    }
  }
  class Subject {
    private observers: Observer[] = [];
    addObserver(observer: Observer) {
      this.observers.push(observer);
    }
    notify(message: string) {
      this.observers.forEach((observer) => {
        observer.update(message);
      });
    }
  }
  let subject = new Subject();
  let observer1 = new ConcreteObserver("app");
  let observer2 = new ConcreteObserver("");
  subject.addObserver(observer1);
  subject.notify("hello world");
}
