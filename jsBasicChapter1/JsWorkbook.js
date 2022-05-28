
// * 문제 1

// [조건]
// 함수명: addStringLength
// 입력: 2개의 문자열
// 출력(반환): 각 문자열의 길이의 합(숫자)

// [예시 1]
// 입력: "abc", "de"
// 출력: 5

// [예시 2]
// 입력: "hello", "world"
// 출력: 10

function addStringLength(inputA, inputB) {
  var x = inputA.length;
  var y = inputB.length;
  return x + y
};

var inputA = "abc";
var inputB = "de";


// * 문제 2
// [조건]
// 함수명: repeatString
// 입력: 문자열 1개, 숫자 1개
// 출력(반환): 각 문자열이 숫자만큼 반복되어 만들어진 새로운 문자열

// [예시 1]
// 입력: "abc", 2
// 출력: "abcabc"

// [예시 2]
// 입력: "hello", 3
// 출력: "hellohellohello"

function repeatString(inputA, inputB) {
  return inputA.repeat(inputB);
};

var inputA = "abc";
var inputB = 2;

// inputA를 inputB의 횟수만큼 반복(repeat함수)하도록 할당하였다


// * 문제 3

// [조건]
// 함수명: removeBlank
// 입력: 문자열 1개
// 출력(반환): 입력된 문자열에서 빈 칸(띄어쓰기)을 없앤 문자열

// [예시 1]
// 입력: "hello world"
// 출력: "helloworld"

// [예시 2]
// 입력: "안녕, 나의 이름은 엘리스야"
// 출력: "안녕,나의이름은엘리스야"

function removeBlank(inputA) {
  let x = inputA.replace(/\s/g, "");
  return x
}

const inputA = "안녕, 나의 이름은 엘리스야";

// replace(/\s/g, "") 을 정규표현식으로 해석하면 다음과 같다
// /\s는 공백 문자를 나타내며 이것만 사용할 경우 맨앞에 있는 공백 문자만 지정하게 된다. 따라서 전역에 있는 공백 문자를 지정하기 위해서 글로벌변수, 즉 /g를 사용하여 모든 공백 문자를 지정해준다
// 모든 공백문자를 지정했으면 이를 "", 즉 " " 를 ""로 바꿔주어 공백 문자를 ""로 대체(replace)하여 없얘준다


// * 문제 4

// [조건]
// 함수명: sortStringArray
// 입력: 문자열들로 이루어진 배열 1개
// 출력(반환): 문자열들이 알파벳 순서대로 나열된 배열

// [예시 1]
// 입력: ["c", "b", "d"]
// 출력: ["b", "c", "d"]

// [예시 2]
// 입력: ["kakao", "naver", "apple"]
// 출력: ["apple", "kakao", "naver"]

function sortStringArray(inputA) {
  var x = inputA.sort();
  return x;
}

var inputA = ["c", "b", "d"];

// sort함수는 배열 안의 문자열 또는 숫자 를 순서대로 정렬해주는 함수이다


// * 문제 5

// [조건]
// 함수명: reverseStringArray
// 입력: 문자열들로 이루어진 배열 1개
// 출력(반환): 문자열들이 알파벳 순서 반대대로 나열된 배열

// [예시 1]
// 입력: ["c", "b", "d"]
// 출력: ["d", "c", "b"]

// [예시 2]
// 입력: ["kakao", "naver", "apple"]
// 출력: ["naver", "kakao", "apple"]

function reverseStringArray(inputA) {
  var x = inputA.sort(function(a, b) {
if(a < b) return 1;
if(a > b) return -1;
if(a === b) return 0;
});
return x;
}

var inputA = ["c", "b", "d"];

// 위의 함수는 순서대로 정렬한 inputA의 데이터 값을 역순(reverse)으로 정렬 한 것이다
// stackoverflow에서 발췌하였으며 자세한건 다음에 서술


// * 문제 6

// [조건]
// 함수명: addMiddleNumbers
// 입력: 7개의 숫자로 이루어진 배열
// 출력(반환): 2, 5, 7번째 숫자의 합

// [예시 1]
// 입력: [1, 2, 3, 4, 5, 6, 7]
// 출력: 14
// (= 2+5+7)

// [예시 2]
// 입력: [2, 5, 10, 1, 4, 12, 6]
// 출력: 15
// (= 5+4+6)

function addMiddleNumbers(inputA) {
  return inputA[1] + inputA[4] + inputA[6];
}

var inputA = [1, 2, 3, 4, 5, 6, 7];

// 배열 속 데이터를 호출할때는 []사용


// * 문제 7

// [조건]
// 함수명: makeTotalPrice
// 입력: 아래와 같은 형태의 객체

// {
//   quantity1: 숫자a,
//   price1: 숫자b,
//   quantity2: 숫자c,
//   price2: 숫자d
// }
// 출력(반환):

// a*b + c*d

// [예시 1]

// 입력
// 출력: 2600
// [예시 2]

// 입력
// 출력: 7400

function makeTotalPrice(inputA) {
  var x = inputA.quantity1 * inputA.price1;
  var y = inputA.quantity2 * inputA.price2;
  return x + y
}

var inputA = {
  quantity1: 4,
  price1: 500,
  quantity2: 2,
  price2: 300
};


// * 문제 8

// [조건]
// 함수명: makeIntroducingText
// 입력: 아래와 같은 형태의 객체

// {
//   firstName: 문자열(이름),
//   lastName: 문자열(성),
//   age: 숫자(나이)
// }
// 출력(반환):

// 전체 이름과 나이가 들어간 인사 문구 

// [예시 1]

// 입력
// 출력: "안녕하세요, 저의 이름은 홍길동이고, 나이는 25살입니다."
// [예시 2]

// 입력
// 출력: "안녕하세요, 저의 이름은 박태환이고, 나이는 32살입니다."

function makeIntroducingText(inputA) {
  var name1 = inputA.firstName;
  var name2 = inputA.lastName;
  var age = inputA.age;
  return name1 + name2 + age;
}

var inputA = {
  firstName: "태환",
  lastName: "박",
  age: 32
};

// 메서드를 부를때는 . 로 지정한 메서드의 이름을 호출하면 된다