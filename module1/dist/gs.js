"use strict";
// getter setter
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
    // addDeposit(amount:number){
    //     this._balance = this._balance + amount
    // }
    // getBalance(){
    //     return this._balance
    // }
    // get
    get balance() {
        return this._balance;
    }
    // set
    set deposit(amount) {
        this._balance = this.balance + amount;
    }
}
const myAccount = new BankAccount(1, 'shakib', 98);
myAccount.deposit = 100;
const mybalance = myAccount.balance;
console.log(mybalance);
