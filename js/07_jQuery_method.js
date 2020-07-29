
// $(document).ready(function(){
//     // browser 에 내용이 완전히 출력되면 그 시점에 실행
//     // li를 찾아서 각각에 대해 이벤트 처리
//     $("ul>li").on("mouseover",function () {
//         $(this).addClass("myStyle")
//     })
//     $("ul>li").on("mouseleave",function () {
//         $(this).removeClass("myStyle")
//     })
//
// })

function insert_text() {
    $("#myDiv").html("<h1>이것은 소리없는 아우성</h1>")
    // text() : 문자를 그래도 가져다가 넣는다 태그적용 안함
    // html() : text()와 동일하게 동작 태그적용 함

}
function delete_div() {
    $("#deleteDiv").remove() // 자신을 포함해서 후손들도 삭제
    //$("#deleteDiv").empty() // 자신을 제외한 후손들만
}
function add_list() {
    // 없는 태그를 만들려면 어떻게 해햐 하나요
    $("<li></li>").text("박길동").attr("class","myStyle")
    var my_li = $("<li></li>").text("박길동").addClass("myStyle")
    // 태그를 생성한 다음 원하는 위치에 가져다 붙인다.
    // 1. append() : 자식으로 붙이고 맨 마지막 자식으로 붙인다.
    //$("ul").append(my_li)
    // 2. prepend() : 자식으로 붙이고 첫번째 자식으로 붙인다.
    //$("ul").prepend(my_li)
    // 3. after() : 형제로 붙이고 다음 형제로 붙인다.
    // $("ul>li:nth-child(3)").after(my_li)
    // 4. before(*) : 형제로 붙이고 이전 형제로 붙인다.
    $("ul>li:last").before(my_li)
}