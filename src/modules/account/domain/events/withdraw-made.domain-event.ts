export class WithdrawMadeDomainEvent {
  public readonly accountId: string
  public readonly amount: number

  public constructor (props: WithdrawMadeDomainEvent) {
    this.accountId = props.accountId
    this.amount = props.amount
  }
}
