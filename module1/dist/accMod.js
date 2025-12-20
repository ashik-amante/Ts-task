"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BankAccount {
    id;
    name;
    _balance;
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    addDeposit(amount) {
        this._balance = this._balance + amount;
    }
    getBalance() {
        return this._balance;
    }
}
class StudentAccount extends BankAccount {
    test() {
        console.log(this._balance);
    }
}
const myAccount = new BankAccount(1, 'shakib', 1000);
myAccount.addDeposit(500);
myAccount.addDeposit(100);
console.log(myAccount.getBalance());
