function reverse(str) {
  for(var i = str.length-1; i >= 0; i--) {
      var reverStr = "";
      reverStr = reverStr + str.charAt(i);
  }
  return reverStr;
}



// 채점을 위한 코드입니다.
document.write(reverse("Nice to meet you"));