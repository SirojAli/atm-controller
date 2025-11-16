const ATMController = require("../src/atmController");
const BankService = require("../src/bankService");
const Account = require("../src/account");

test("ATM flow: insert → PIN → deposit → withdraw", () => {
  const bank = new BankService();
  const account = new Account(100);
  const atm = new ATMController(bank, account);

  atm.insertCard();

  expect(atm.enterPin("0000", "1234")).toBe(true);

  expect(atm.deposit(50)).toBe(150);

  expect(atm.withdraw(30)).toBe(120);

  expect(atm.checkBalance()).toBe(120);
});
