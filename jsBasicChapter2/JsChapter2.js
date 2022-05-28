// * 연산자 

console.log(20 + 10); // 30
console.log(20 - 10); // 10
console.log(20 * 10); // 200
console.log(20 / 10); // 2
console.log(20 % 10); // 0

console.log("20" + "10"); // 2010
console.log("20" - "10"); // 10
console.log("20" * "10"); // 200
console.log("20" / "10"); // 2
console.log("20" % "10"); // 0

// 숫자 뿐만 아니라 문자열 도 연산 가능하다
// 문자열 연산의 경우 + 는 문자열을 서로 붙이는 역할을 한다


// * 증감 연산자

console.log(++num); // num = num + 1 과 같다
console.log(--num); // num = num - 1 과 같다

console.log(num++); // 만약 num이 10 이라면 console.log 를 통해 10 이 출력이 되며 +1 이 된 값 11 은 다음 데이터로 넘어가게 된다
console.log(num--); // 넘어온 값 num 은 console.log 를 통해 11이 출력되며 -1 이 된 값 10 은 다음 데이터로 넘어가게 된다


// * 비교 연산자

console.log(10 == "10"); // true
console.log(10 === 10); // true
console.log(10 !== 20); // true

console.log(10 < 20); // true
console.log(10 <= 20); // true
console.log(10 < 20); // true
console.log(10 <= 20); // true


// * 논리 연산자

console.log(10 === 10 && 20 === 30); // 앞 뒤 조건 모두 참인 경우에만 true 반환하는 AND 연산자, false
console.log(10 === 10 || 20 === 30); // 둘 중 하나만 참이여도 true 반환하는 OR 연산자, true

// AND 연산자의 경우 앞이 true 라면 뒤까지 확인하여야 결과값이 true 인지 확인 할 수 있고 OR 연산자의 경우 앞이 true 라면 굳이 뒤를 확인하지 않더라고 결과값이 true 이다


// * 조건문

var a = 20;
var b = 40;

if (a < b) {
  console.log("a 는 b 보다 작다");
} else {
  console.log("a 는 b 보다 같거나 크다")
}

// a < b 가 true 라면 console.log("a 는 b 보다 작다") 가 실행된다
// 만약 a < b 가 false 라면 console.log("a 는 b 보다 같거나 크다") 가 실행된다

var a = 20;
var b = 40;
var c = 60;

if (a > b) { console.log("a 는 b 보다 크다")
} else if (b > c) { console.log
}
