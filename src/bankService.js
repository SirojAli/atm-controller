class BankService {
  validatePin(cardNumber, pin) {
    const pins = { "0000": "1234", 1111: "5678" };
    return pins[cardNumber] === pin;
  }
}

module.exports = BankService;
