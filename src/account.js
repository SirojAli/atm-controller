class Account {
  constructor(balance = 0) {
    this.balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("Deposit must be positive");
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount > this.balance) throw new Error("Insufficient funds");
    this.balance -= amount;
  }
}

module.exports = Account;
