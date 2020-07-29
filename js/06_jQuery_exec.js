
function print_text() {
    //alert("호출됩니다")
    console.log($("#apple").text())


    console.log($("#pineapple").text())             // # id 지정 할때

    console.log($("ul>li.myList").text()) // console.log($("ul>li[myList]").text())


    console.log($("input[type=text]").val())        // "input[type = ???]" input 형식

    console.log($("ol>li.myList:first").text())                 // ("ol > li.mylist:first")// )자손 지정할 때
                                                                // nth-child 자손들 중 처음 정의된 자손들 부터 순서 대로 지정 가능
    console.log($("ol>li.myList:nth-child(1)").text())
    // python 과 달리 1부터 시작한다.

    console.log($("ol>li.myList:last").text())

    console.log($("ol>li.myList:first + li ").text()) // 익숙해지기

    $("input[type=text]").attr("size",10)
}

function my_func() {

    // alert("과일 변경") function이 제대로 작동하는지 확인
    // 1. 선택한 과일이 어떤 과일인지 알아내야 한다.
    var fruit = $("select > option:selected").text()


    var my_list = $("ul > li")
    my_list.each(function(idx,item){
        //console.log($(item).text())
        if ($(item).text() == fruit){
            $(item).css("color", "red")
        } else{
            $(item).css("color","black")
        }
    })
}