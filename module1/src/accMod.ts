class BankAccount {
    readonly id : number;
    public name: string;
    protected _balance : number
    
    constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
    }
    addDeposit(amount:number){
        this._balance = this._balance + amount
    }
    getBalance(){
        return this._balance
    }
}

class StudentAccount extends BankAccount {
    test(){
        console.log(this._balance);
    }
}

const myAccount = new BankAccount(1, 'shakib', 1000)
myAccount.addDeposit(500)
myAccount.addDeposit(100)
console.log(myAccount.getBalance())