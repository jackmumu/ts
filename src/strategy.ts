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
console.log(new discoutContext("bronze").calculateDiscout(1000))
console.log(new discoutContext("silver").calculateDiscout(1000))
console.log(new discoutContext("gold").calculateDiscout(1000))
