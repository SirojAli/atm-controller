class BankService {
  validatePin(cardNumber, pin) {
    return pin === "1234";
  }
}

module.exports = BankService;
