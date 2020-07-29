function search_image() {
    if(event.keyCode == 13){

    //AJAX를 이용해 DAUM족 open API 호출
    $.ajax({
        async : true,
        url : "https://dapi.kakao.com/v2/search/image",
        data : {
            query : $("#movie_name").val() + "포스터",
            sort : "accuracy"
        },
        beforeSend : function(xhr){
            xhr.setRequestHeader("Authorization","KakaoAK 5d155d115d92eae473a88c6f6e78b424")
        },
        type : "GET",
        timeout : 3000,
        dataType : "json",
        success : function(result){
            var img_list = result.documents
            var li = $("<li></li>")
            var img = $("<img/>").attr("src",img_list[0].thumbnail_url).addClass("myImage")
            li.append(img)
            $("ul").append(li)
        },
        error : function(error){
            alert("실패")
        }
    })
        }

}