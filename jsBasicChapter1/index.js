// * 변수 지정
var redfruit="apple";

// var을 사용하여 redfruit를 apple이라는 문자열으로 변수할당한다
// 사실 var의 사용은 지양된다. 보통 const나 let이 사용된다

// 변수 지정시 유의사항
// 1. 변수명은 숫자로 시작 할 수 없다
// 2. 변수명은 최대한 자세하고 명확하게

// * 총 8가지의 데이터타입
// 1. 문자열(string) 2. 숫자(number) 3. 함수(function) 4. 

// 1. string
var string = "문자열";

// 위의 "문자열" 처럼 문장이나 단어의 양옆에 "", '', `` 를 입력해주어 선언 할 수 있다

// 2. number
var number = 32;

// 위의 32 처럼 숫자를 입력해주어 선언 할 수 있다.


// 3. function
var func1 = function() {
  console.log("hello world!")
};

function func1() {
  console.log("hello world!");
};

// 대표적으로 위와같이 두가지 방식으로 표현이 가능하다

func1()

// 위와같이 함수를 호출한다

var func2= function(x, y) {
  x * y;
};

console.log(func2(3, 4));

// function(x, y)는 매개변수이다
// 매개변수는 위처럼 함수 내에서 작동하는 하나의 변수로 활용한다
// 결과적으로 3 * 4 가 작동되서 12 가 숫자로 출력한다

// 4. array
var fruit = ["apple", "watermellon", "mango", "strawberry"];

console.log(fruit[0]);

// 배열이란 비슷한 성격을 가지고있는 집합체이다
// 위의 식을 기준으로 apple이 0으로 시작. 즉, 배열 속 apple 을 표현하고 싶다면 fruit[0] 를 출력한다

// 5. object

var student = {
  name : "inkwon",
  age : 20,
  skills : ["자바스크립트", "HTML", "CSS"],
  sum : function (num1, num2) { return num1 + num2},
};

// 매서드는 function 을 가지고 프로퍼티는 function 을 가지지 않는다

student.name = "Park";
console.log(student.name);

// student 객체에서 name 프로퍼티를 가져왔으므로 "inkwon" 이라는 이름을 "Park"로 덮어씌우게 된다

// 6. undefined와 null
var unde;
var empty = null;

// undefined 는 변수 안에 데이터를 입력하지 않은 상태이다
// null 은 변수 안에 임의로 빈 데이터를 지정 한것이다

// * boolean
var t = true;
var f = false;

// 데이터 값에 true 또는 false 값이 입력한 것이다