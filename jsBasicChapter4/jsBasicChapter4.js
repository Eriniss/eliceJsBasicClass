// * 도전! 크로켓 경기 소개 페이지 만들기!

// 네이게이션 설정
e.preventDefault(); // 특정 기능 정지 메서드
xxx.querySelector('#intro'); // 1개의 태그를 css 선택자 기반으로 가져온다
xxx.querySelectorAll("a"); // 여러 개의 태그를 css 선택자 기반으로 가져온다
xxx.qetAttribute("href"); // 특정 태그가 갖고 있는 속성의 속성값을 가져온다
window.scrollTo({ // 특정 지점으로 스크롤링
  'behavior': 'smooth', // 부드럽게 이동
  'top': xxx.offsetTop // 특정 영역의 위에서의 좌표값
})

// 이미지 슬라이드
setInterval(function(){
  
}, 3000); // 3초 간격으로 반복적으로 함수 실행

xxx.animate({
  marginLeft: ["0px", "1024px"]
}, {
    duration: 500, // 애니메이션 진행시간, 500ms, 0.5초
    easing: "ease", // 애니메이션의 속도를 그래프로 나타내는것. ease는 그래프 종류중 하나
    iterations: 1, // 애니메이션 반복 횟수
    fill: "both" // 애니메이션을 어떻게 채울지 결정. both의 경우 양쪽 모두 채움
}) // 애니메이션 실행

// 탭 버튼 기능 구현
xxx.classList.remove(클래스명); // 요소에서 특정 클래스 제거
xxx.classList.add(클래스명); // 요소에 클래스명 추가
nodeList.forEach(function(item) { // 배열의 모든 요소에 코드 적용
  console.log(item);
})

// 이미지 슬라이드 2

// 요소 선택 기능

xxx.previousElementSibling;
// 이전 형제요소 선택
xxx.nextElementSibling;
// 다음 요소 선택
xxx.parentElement;
// 부모 요소 선택
xxx.firstElementChild;
// 첫번째 자식 요소 선택
xxx.lastElementChild;
// 마지막 자식 요소 선택