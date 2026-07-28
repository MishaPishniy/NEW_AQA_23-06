class BankAccount {
    #balance
  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(`Баланс поповнено на ${amount}`);
  }

  showBalance() {
    console.log(`Баланс: ${this.#balance}`);
  }
}

const account = new BankAccount("Михайло", 1000);

account.deposit(500);
account.showBalance();


//console.log(account.balance)