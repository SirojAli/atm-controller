const ATMController = require("../src/atmController");
const BankService = require("../src/bankService");
const Account = require("../src/account");

test("cannot withdraw more than balance", () => {
  const bank = new BankService();
  const account = new Account(50);
  const atm = new ATMController(bank, account);
  atm.insertCard();
  atm.enterPin("0000", "1234");
  expect(() => atm.withdraw(100)).toThrow("Insufficient funds");
});
