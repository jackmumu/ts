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
