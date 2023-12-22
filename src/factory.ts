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
class Singleton {
    private static instance: Singleton;
    private constructor() {
    }
    public static getInstance(): Singleton {
        if(!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
}