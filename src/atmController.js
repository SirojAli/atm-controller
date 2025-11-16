class ATMController {
  constructor(bankService, account) {
    this.bankService = bankService;
    this.account = account;
    this.cardInserted = false;
    this.pinVerified = false;
  }

  insertCard() {
    this.cardInserted = true;
  }

  enterPin(cardNumber, pin) {
    if (!this.cardInserted) throw new Error("Insert card first");
    this.pinVerified = this.bankService.validatePin(cardNumber, pin);
    return this.pinVerified;
  }

  checkBalance() {
    if (!this.pinVerified) throw new Error("PIN not verified");
    return this.account.balance;
  }

  deposit(amount) {
    if (!this.pinVerified) throw new Error("PIN not verified");
    this.account.deposit(amount);
    return this.account.balance;
  }

  withdraw(amount) {
    if (!this.pinVerified) throw new Error("PIN not verified");
    this.account.withdraw(amount);
    return this.account.balance;
  }
}

module.exports = ATMController;
