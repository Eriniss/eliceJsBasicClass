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

if (a > b) { console.log("a 는 b 보다 크다") // f
} else if (b > c) { console.log("b 는 c 보다 크다") // f
} else if (a < c) { console.log("a 는 c 보다 작다") // t
} else if (b < c) { console.log("b 는 c 보다 작다") // t
} else { console.log("모든 조건을 만족하지 않는다")
}

// 이런식으로 else 와 if 를 붙여서 사용할 수도 있다
// 주의점으로 if 문에서 만약 true의 조건이 충족되어 함수가 실행되었다면 return 과 같이 함수를 종료해버린다
// 즉 위의 식은 else if (a < c) { console.log("a 는 c 보다 작다")} 가 출력되며 밑의 함수문은 생략된 채로 종료된다

const a = 20;
const b = 40;

if (a !== b) { 
    if (a > b) { document.write("a > b")
    } else { document.write("a < b")
    }
} else { document.write("a === b")
}

// 이와 같이 if문 안에 if문 을 넣어 줄 수 있다. 이럴땐 가장 위에있는 if문 부터 차례로 풀어주면 된다
// 20 !== 40 이므로 true 가 출력되어 if문 안의 함수식이 실행된다. 이때 20 > 40의 값이 false 값이므로 최종적으로 else { document.write("a < b")} 가 출력되게 된다
// !=== 와 같은 문법은 없다


// * 반복문
// 반복문 은 일정한 규칙을 가진 데이터를 출력할 때 사용

// for 반복문

for (var i = 0; i < 10; i++) {
  console.log(i);
}

// for 반복문 은 총 for (초기화한 변수값; 조건; 증감 표시) { 수행할 명령 } 으로 구성된다
// 해석하면 다음과 같다
// i = 0 을 한번 실행하고 console.log(0) 을 출력한다. 이때 i = 0 값이 조건을 거치게 되어 true 값을 가지게 되면 곧바로 증감 표시 함수를 거치게 된다
// 즉, i 에 1이 더해서 i = 1 이 되고 이러한 과정을 조건이 false 가 나올 때가지 반복하게 되며 조건이 false 가 나오게 될경우 for문 은 종료된다

// while 반복문 

var i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

// 위의 for 반복문과 결과가 동일한 식이다
// 초기화한 변수값을 while 문 밖에 할당 할 수 있다

// do while 문

var i = 12;

do {
  console.log(i);
  i++;
} while (i < 10);

// do while 문의 경우 while 의 조건과 관계 없이, do 의 명령을 무조건 실행부터 한다
// 즉, 조건에 관계없이 무조건 한번은 실행시킨다
// 이에 따라 최종적으로 console.log(12) 을 실행하게 된다
