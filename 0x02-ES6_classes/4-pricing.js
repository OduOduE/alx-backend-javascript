import Currency from './3-currency'

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(naira) {
    this._amount = naira;
  }

  get currency() {
    return this._amount;
  }

  set currency(dollars) {
    this._amount = dollars;
  }

  displayFullPrice() {
    return `${this._amount} ${this.currency._name} (${this.currency._code})`;
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
