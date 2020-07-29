
function call_ajax() {
    // 입력 텍스트 상자에서 키보드로 입력이 들어왔을 때 호출
    // 모든 키에 대해서 처리하는게 아니라 enter key일 경우에만 처리
    if (event.keyCode ==  13) {
        //만약 입력된 키가 enter key 이면 이부분을 수행
        // server program을 호출해서 결과를 받는다.
        // jQuery를 이용해 AJAX 처리
        // ajax 의 인자로 javascript 객체를 넣어준다
        // javascript 객체는 ==> {key :value, key :value, ...}
        // data : 서버프로그램에게 넘겨줄 데이터들
        $.ajax(
            {
                async: true,  //  비동기 방식의 호출(default)
                url: "http://192.168.0.200:8080/bookSearch/search",
                data: {
                    keyword: $("input[type=text]").val()
                },
                type: "GET",
                timeout: 3000,
                dataType: "JSON", // 결과 JSON을 JavaScript 객체로 변환.
                success: function (result) {

                    result = result.children
                    $("tbody").empty()
                    // $.each(result,function(idx,item)) {}
                    for (var i = 0; i < result.length; i++) {

                        var tr = $("<tr></tr>>") // <tr></tr>

                        var imgTd = $("<td></td>>") // <td></td>

                        var img = $("<img />").attr("src", result[i].img)// <img src>
                        imgTd.append(img)

                        var delTd = $("<td></td>>")

                        var titleTd = $("<td ></td>>").text(result[i].title)

                        var authorTd = $("<td ></td>>").text(result[i].author)

                        var priceTd = $("<td ></td>>").text(result[i].price)

                        var deleteBt = $("<input />").attr("type","button").attr("value","삭제")
                        deleteBt.on("click", function() {
                           // 현재 클릭된 번튼에 대한 책 정보를 찾아서 삭제
                           // this : 현재 이벤트가 발생된 객체를 지칭
                           $(this).parent().parent().remove()
                        })
                        delTd.append(deleteBt)

                        tr.append(imgTd)
                        tr.append(titleTd)
                        tr.append(authorTd)
                        tr.append(priceTd)
                        tr.append(delTd)
                        // <input type="button" value="삭제!" onclick = "delete_tr"

                        $("tbody").append(tr)
                        // alert(result[0].title)              //제목
                    }
                },
                error: function (error) {
                    alert("서버 호출 실패!!")
                }

            })
    }
}


function delete_tr() {
    $("#delete_tr").remove()
}