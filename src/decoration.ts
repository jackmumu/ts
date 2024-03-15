function strong(target: any, key: any) {
    target.prototype.uzi = true;
    target.uzi2 = true;
}

@strong
class solid{}
console.log(new solid(), 'solid');
(window as any).s = new solid();