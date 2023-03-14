import Installment from './Installment'
import Tax from './Tax'

type StatusType = 'waiting_payment' | 'closed' | 'paid'
export default class Transaction {
  private status: StatusType
  installments: Installment[]
  constructor(
    private readonly email: string,
    private readonly amount: number,
    private readonly paymentMethod: string,
    private readonly numberOfinstallments: number,
    private readonly tax: Tax
  ) {
    this.status = 'waiting_payment'
    this.installments = []
    this.generateInstallment()
  }

  generateInstallment() {
    let installmentNumber = 1
    const installmentAmount = this.amount / this.numberOfinstallments
    while (installmentNumber <= this.numberOfinstallments) {
      const installment = new Installment(
        installmentNumber++,
        installmentAmount,
        this.tax
      )
      this.installments.push(installment)
    }
  }

  pay(installmentNumber: number) {
    const installment = this.installments.find(
      (installment) => installment.number === installmentNumber
    )

    if (!installment) {
      throw new Error('')
    }

    // essa parcela já foi paga?

    installment.status = 'paid'
  }

  getBalance() {
    let balance = this.amount
    for (const installment of this.installments) {
      if (installment.status === 'paid') balance -= installment.amount
    }

    return balance
  }

  getStatus(): StatusType {
    const balance = this.getBalance()
    return balance === 0 ? 'paid' : 'waiting_payment'
  }
}
