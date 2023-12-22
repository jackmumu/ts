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
