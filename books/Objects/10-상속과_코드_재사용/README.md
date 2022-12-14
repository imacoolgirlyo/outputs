# 상속과 코드 재사용

코드 재사용이란 측면을 놓고 봤을 때 상속과 합성을 아래와 같이 정의할 수 있다.

- `상속` : 클래스의 메서드와 인스턴스 변수를 새로운 클래스에 자동으로 추가하는 구현 기법
- `합성` : 새로운 클래스의 인스턴스 안에 기존 클래스의 인스턴스를 포함시키는 방법

## 중복 코드

중복 코드는 항상 나쁠까? 코드의 모양만 같다고 코드가 중복되었다고 판단하여 코드를 수정해야하나?

코드의 중복은 변경을 기준으로 해야한다. 코드가 변경이 되야할 시점에 함께 변경이 되어야 한다면 중복으로 봐야한다. 하지만 수정하지 않아도 된다면 중복 코드로 볼 수 없다.

중복된 코드는 변경하기 위해서 몇 배로 노력해야기 때문에 최대한 중복된 코드를 만들지 않으려 노력하는 것이 중요하다.

> 신뢰할 수 있고 변경이 쉬운 소프트웨어를 만들기 위해서 효과적인 방법 중 하나는 중복을 제거하는 것이다. **DRY(Don't Repeat Yourself) 원칙: 모든 지식은 시스템 내에서 단일하고, 애매하지 않고, 정말로 믿을만한 표현 양식을 가져야한다.**

## 상속을 이용한 중복 제거

Phone, NightlyDiscountPhone 예제.

### 구현 요구 사항

전화 요금은 통화 시간을 기본 단위 시간 당 요금으로 나눠서 계산할 수 있다. 만약 1분간 통화 했고 (60s) 10s 마다 5원이 붙는 요금을 사용하고 있다면 총 60/10\*5 = 30원 요금이 부과된다.

요구 사항은 항상 변하므로, 기본 요금이 출시된 후 심야 요금제가 추가가 되었다. 심야 요금은 밤 10시 이후의 통화에 대해 요금을 할인해주는 방식이다.

심야 요금제를 가장 쉽고 빠르게 만들 수 있는 방법은 기존에 만들어진 상속을 이용하는 것이다.

---

- 구현이 거의 동일하기 때문에 중복을 제거하는 가장 쉬운 방법인 상속을 이용하여 기존 코드를 그대로 사용했다.
- 하지만 설계에 의한 상속이 아닌 중복 제거를 위해서 상속을 사용하다보면 점점 부모 클래스의 세부 구현 사항에 영향을 많이 받게 되고 코드의 변경이 어려워질 수 있다. 즉 부모 클래스와 자식 클래스 간의 결합도가 높아진다.

---

### 👨‍🏫 다시 읽어보면 좋을 내용들

- `결합도`는 한 모듈이 다른 모듈에 대해 얼마나 많은 지식을 가지고 있는지를 나타내는 정도
