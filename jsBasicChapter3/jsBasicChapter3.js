// * DOM

// "DOM" 이란 Document Object Model의 약자로 HTML 문서의 계층적 구조와 정보를 표현하며 이를 제어할수 있는 API, 즉 프로퍼티와 메서드를 제공하는 트리 자료구조다
// HTML 문서를 조작하고 접근하는 표준화된 방법으로 모든 HTML 요소는 HTML DOM을 통하여 접근이 가능하다

// Document node는 웹페이지를 의미하며 모든 node 의 최상단에 위치해있는 루트이다
// Element node(요소 노드)는 HTML 요소를 가리키는 객체이다. 요소 노드는 HTML 요소 간의 중첩에 의해 부자 관계를 가지며, 이 부자 관계를 통해 정보를 구조화 한다. 따라서 요소 노드는 문서의 구조를 표현한다고 할 수 있다
// Attribute node(어트리뷰트 노드)는 HTML 요소의 어트리뷰트 를 가리키는 객체이다. 단, 어트리뷰트 노드 는 부모 노드 와 연결되어 있지만 어트리뷰트 노드는 부모 노드와 연결되어 있지 않다. 즉, 어트리뷰트 노드에 접근하기 위해선 먼저 요소 노드에 접근해야 한다
// Text node(텍스트 노드)는 HTML 요소의 텍스트를 가리키는객체다. 요소 노드가 문서의 구조를 표현한다면 텍스트 노드는 문서의 정보를 표현한다고 할 수 있다. 텍스트 노드는 요소 노드의 자식 노드이며, 자식 노드를 가질 수 없는 리프 노드다. 즉, 텍스트 노드는 DOM 트리의 최종단이다. 따라서 텍스트 노드에 접근하려면 먼저 부모 노드인 요소 노드에 접근해야 한다

// * 요소 노드를 취득하는 방법

<html>
  <body>
    <h1 id = "apple">apple</h1>
    <h1 class = "banana">banana</h1>
  </body>
</html>

// 해당 아이디(apple)의 요소 노드를 취득하는 방법
document.getElementById("apple"); 
document.querySelector("#apple");

// 해당 클래스(banana)의 요소 노드를 취득하는 방법
document.getElementsByClassName("banana");
document.querySelector(".banana"); // 지목된 class 중 가장 위에 위치한 클래스 하나만 호출 해 취득한다
document.querySelectorAll(".banana"); // 지목된 class 모두를 호출하여 취득한다

// 태그 이름(Tag name) 을 이용한 요소 노드를 취득하는 방법
document.getElementsByTagName("h1");

// * 요소노드를 생성하는 방법

// 요소 노드를 생성
document.createElement("strawberry");

// HTML 출력 스트림을 통한 텍스트 출력
document.querySelector.write("#apple");

// HTML 이벤트 헨들러 추가
const $button = document.querySelectorAll(".banana");
$button.oneclick = function () {}

// * DOM 요소의 스타일 변경

// CSS 선택자를 이용한 요소 노드 취득 및 스타일 적용
const $elem = document.querySelectorAll(".banana");

$elem.style.color = red;

// banana 클래스를 호출하여 style.color를 이용해 폰트색상을 red로 적용하였다

// * DOM 요소의 내용 변경

const str = document.getElementById("apple");

// apple 아이디에 적힌 "apple" 텍스트를 "요소의 내용을 변경합니다" 로 변경한다
str.innerHTML = "요소의 내용을 변경합니다"

// * 노드의 값

// HTML 문서의 모든 자식 노드 중에서 첫 번째 노드의 이름을 선택
document.childNodes[0].nodeName;

// 아이디가 "heading"인 요소의 첫 번째 자식 노드의 노드값을 선택
document.getElementById("heading").firstChild.nodeValue;

// 아이디가 "heading"인 요소의 첫 번째 자식 노드의 타입을 선택
document.getElementById("heading").firstChild.nodeType;


// * 이벤트
// 이벤트란 웹 브라우저가 알려주는 HTML 요소에 대한 사건의 발생을 말한다

<p onclick = "changeText(this)">여길 클릭하세요!</p>

function changeText(element) {
  element.innerHTML = "내용이 바뀌었습니다!";
}

// 위의 함수식은 p 태그를 클릭할 시 element.innerHTML = "내용이 바뀌었습니다!"; 를 실행하게 된다
// 즉, p 태그 내에 있는 텍스트인 "여길 클릭하세요!"가 "내용이 바뀌었습니다!"로 변경된다

// * 이벤트 핸들러
// 이벤트 헨들러란 이벤트가 발생했을 때 그 처리를 담당하는 함수를 말한다

window.onload = function() {
  var text = document.getElementById("text");
  text.innerHTML = "HTML 문서가 로드되었습니다.";
}

// 위의 함수식을 해석해보면 window가 onload(실행)되었을 때 작동하는 함수로서 text id 를 호출하여 text id 에 있는 텍스트를 "HTML 문서가 로드되었습니다." 로 변경한다

// * addEventListener 프로퍼티

function move() {
    var box = document.querySelector("#move");
    box.style.width = "600px";
    box.style.height = "600px";
    box.style.left = "300px";
};

var btn = document.querySelector("#btn");

btn.addEventListener("click", move);

// html 에 있는 btn id 를 먼저 호출하여 btn 변수에 할당하였다 
// 다음 이벤트 헨들러를 빈 h1 id 로 할당 한다
// addEventListener 프로퍼티는 ("이벤트 타입", 이벤트 핸들러) 로 구성되어있다
// addEventListener 를 사용하여 이벤트 타입과 이벤트 헨들러를 할당한다


