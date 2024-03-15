"use strict";
// export class EventWrapper<Events extends {}> {
//     // ...
//     private readonly __es:Map<any, Array<any>>;
//     constructor() {
//         this.__es = new Map();
//     }
//     public on<T extends keyof Events>(type:T, Events: Events[T]){
//         let array = this.__es.get(type);
//         if(!array){
//             array = [];
//             this.__es.set(type, array);
//         }
//         if(!array.includes(Events)){
//             array.push(Events);
//         }
//     }
//     public emit<T extends keyof Events>(type:T, emitor: (event: Events[T]) => void){
//         const array = this.__es.get(type);
//         if(array){
//             for(let event of array){
//                 emitor(event);
//             }
//         }
//     }
//     public off<T extends keyof Events>(type:T, Events: Events[T]){
//         const array = this.__es.get(type);
//         if(array){
//             const index = array.indexOf(Events);
//             if(index >= 0) {
//                 array.splice(index, 1)
//             }
//         }
//     }
//     public offAll() {
//         this.__es.clear();
//     }
// }
