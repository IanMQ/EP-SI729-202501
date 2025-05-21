export class Campaign {
  constructor(
    public id: string,
    public name: string,
    public location: string,
    public startDate: string,
    public endDate: string,
    public targetItems: string[]
  ) {}
}
