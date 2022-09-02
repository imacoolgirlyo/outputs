// 구독 중인 요금 정보(단위 요금, 단위 시간), 총 요금 계산, 전화 목록

class Call {
  private from: Date;
  private to: Date;

  constructor(from: Date, to: Date) {
    this.from = from;
    this.to = to;
  }

  public getDuration() {
    const duration = this.to.getTime() - this.from.getTime();

    return duration / 1000;
  }
}

class Phone {
  private amount: number;
  private duration: number;
  private calls: Call[];

  constructor(amount: number, duration: number) {
    this.amount = amount;
    this.duration = duration;
  }

  public calculateFee(): number {}
}
