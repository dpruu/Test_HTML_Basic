
function call_ajax() {
    $.ajax(
        {
            async: true,  //  비동기 방식의 호출(default)
            url: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=b46ba4cd00838e5bb5e830856991548b",
            data: {
                targetDt: $("input[type=date]").val().replace(/-/gi,'')
                    //.replace(/-/gi,'')
            },
            type: "GET",
            timeout: 3000,
            dataType: "JSON", // 결과 JSON을 JavaScript 객체로 변환.

            success: function (result) {

                $("tbody").empty()
                var box_result = result.boxOfficeResult.dailyBoxOfficeList

                $.each(box_result,function(idx,item) {

                    var tr = $("<tr></tr>") // <tr></tr>

                    // var img = $("<img />").attr("src","https://t1.daumcdn.net/movie/389d6e403d8ee48c419c7b16908919103e2c2670").width(100).height(100)// <img src>
                    // var imgTd =  $("<td ></td>").append(img)

                    $.ajax({
                        async : false,
                        url : "https://dapi.kakao.com/v2/search/image",
                        data : {
                            query : "영화"+item.movieNm,
                            sort : "accuracy"
                        },
                        beforeSend : function(xhr){
                            xhr.setRequestHeader("Authorization","KakaoAK 5d155d115d92eae473a88c6f6e78b424")
                        },
                        type : "GET",
                        timeout : 3000,
                        dataType : "json",
                        success : function(result){
                           images = result.documents
                           image_url = images[0].thumbnail_url
                            }
                    })
                    var imgTd =  $("<td ></td>")
                    var img = $("<img />").attr("src",image_url).width(200).height(200)// <img src>
                    imgTd.append(img)

                    var defTd = $("<td></td>")

                    var rankTd = $("<td ></td>").text(item.rank)
                    var movieNmTd = $("<td ></td>").text(item.movieNm)
                    var salesAccTd = $("<td ></td>").text(item.salesAcc)
                    var audiAccTd = $("<td ></td>").text(item.audiAcc)

                    var defBt = $("<input />").attr("type","button").attr("value","상세정보")
                    defBt.on("click",function () {
                        $.ajax(
                            {

                            async: true,  //  비동기 방식의 호출(default)
                            url: "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=b46ba4cd00838e5bb5e830856991548b",
                            data: {
                                movieCd: item.movieCd
                                },
                            type: "GET",
                            timeout: 3000,
                            dataType: "JSON", // 결과 JSON을 JavaScript 객체로 변환.
                            success: function (result1) {
                                var info_result = result1.movieInfoResult.movieInfo

                                var tr1 = $("<tr></tr>") // <tr></tr>

                                var movieNmTd = $("<td ></td>").text(info_result.movieNm)

                                var prdtYTd = $("<td ></td>").text(info_result.prdtYear)

                                var genreNmTd = $("<td ></td>")
                                for ( i = 0; i < info_result.genres.length; i++){
                                    genreNmTd.append(info_result.genres[i].genreNm," ")}
                                var directorsTd = $("<td ></td>")
                                for ( i = 0; i < info_result.directors.length; i++){
                                    directorsTd.append(info_result.directors[i].peopleNm," ")}
                                var peopleNmTd = $("<td ></td>")
                                for ( i = 0; i < info_result.actors.length; i++){
                                    peopleNmTd.append(info_result.actors[i].peopleNm," ")}

                                //console.log(info_result)
                                //console.log(peopleNmTd)
                                tr1.append("영화제목 : ", movieNmTd ,"\n")
                                tr1.append("제작년도 : ",prdtYTd ,"\n")
                                tr1.append("장르 : ",genreNmTd ,"\n")
                                tr1.append("감독 : ",directorsTd ,"\n")
                                tr1.append("출연진 : ",peopleNmTd ,"\n")
                                alert(tr1.text())

                            },
                            error : function () {
                                alert("실패")
                            }
                            })

                    })

                    defTd.append(defBt)
                    tr.append(rankTd)
                    tr.append(imgTd)
                    tr.append(movieNmTd)
                    tr.append(salesAccTd)
                    tr.append(audiAccTd)
                    tr.append(defTd)
                    // <input type="button" value="삭제!" onclick = "delete_tr"

                    $("tbody").append(tr)
                    // alert(result[0].title)              //제목
                })

                },
                error: function (error) {
                    alert("서버 호출 실패!!")
                }

            })

}
