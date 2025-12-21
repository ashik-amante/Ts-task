"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Counter {
    static count = 0;
    static increment() {
        return Counter.count = Counter.count + 1;
    }
    static decrement() {
        return Counter.count = Counter.count - 1;
    }
}
const co1 = new Counter();
console.log(Counter.increment());
const co2 = new Counter();
console.log(Counter.increment());
const co3 = new Counter();
console.log(Counter.decrement());
