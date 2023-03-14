export default class Tax {
  constructor(
    public readonly paymentMethod: string,
    public readonly percentage: number,
    public readonly amount: number
  ) {}
}
