
// jQuery CDN 을 이용했기 때문에 jQuery code 를 바로 사용할 수 있다.

// 버튼을 클릭하면 아래의 함수가 출력
function my_func() {
   // 0. jQuery 를 공부할때 가장 먼저 배워야 하는건 selector

    // 1. 전체 선택자(universal selector)
   $ ("*").css("color","red")

    // 2. 태그 선택자(tag selector)
   // $("li").remove()

    // 3. id 선택자(id selector)
   $("#haha").text("제주")  //인자가 없으면 값을 알아오라. 있으면 값을 변경해라

    // 4. 클래스 선택자(class selector)
   $(".region").css("background-color","yellow")

    // 5. 구조 선택자(자식 선택자 혹은 후손 선택자)
   $("ol>li").css("color","blue")     //$("ol>*")
    $("div li").css("color","pink")

   // 6. 형제 선택자
   // $("#haha + li").remove()
    $("#hong ~ li").remove()

    // 7. 속성 선택자
    $("[id]").css("color","purple")
   // 이 7가지를 조합하면 웬만한 element는 지정가능

}