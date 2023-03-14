import Installment from '../src/Installment'
import Tax from '../src/Tax'

test('Deve criar um parcela com mdr percentual e variável', () => {
  const tax = new Tax('credit_card', 1, 0.5)
  const installment = new Installment(1, 1000, tax)
  expect(installment.mdr).toBe(10.5)
})

test('Deve criar um parcela sem mdr ', () => {
  const tax = new Tax('credit_card', 0, 0)
  const installment = new Installment(1, 1000, tax)
  expect(installment.mdr).toBe(0)
})

test('Deve criar um parcela com mdr variável', () => {
  const tax = new Tax('credit_card', 1, 0)
  const installment = new Installment(1, 1000, tax)
  expect(installment.mdr).toBe(10)
})
