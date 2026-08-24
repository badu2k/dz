class Billing {
  constructor(amount, strategy) {
    this.amount = amount;
    this.strategy = strategy;
  }
  calculateTotal(value) {
    return this.strategy.calculate(this.amount, value);
  }
}

class FixBilling {
  calculate(amount) {
    return amount;
  }
}

class HourBilling {
  calculate(amount, hours) {
    return amount * hours;
  }
}

class ItemBilling {
  calculate(amount, items) {
    return amount * items;
  }
}
