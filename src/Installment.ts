import Tax from './Tax'

export default class Installment {
  public status: string
  public mdr: number = 0
  constructor(
    public readonly number: number,
    public readonly amount: number,
    public readonly tax: Tax
  ) {
    this.status = 'waiting_payment'
    this.calculateMdr()
  }

  calculateMdr() {
    if (this.tax.amount) {
      this.mdr += this.tax.amount
    }

    if (this.tax.percentage) {
      this.mdr += (this.tax.percentage * this.amount) / 100
    }
  }
}
