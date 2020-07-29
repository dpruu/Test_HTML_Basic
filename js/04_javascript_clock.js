function start_clock() {
    //alert("버튼이 클릭클릭!!")
    //현재 시간을 구한다
    // 현재 날짜의 시분초를 구한다.
    // 이 시간을 HTML 측정 영역에서 출력
    // 위 작업을 1초마다 반복
    // javascript는 특정시간마다 특정함수를 반복해주는 함수를 제공

    // var today = new Date() //날짜 객체 생성
    // console.log(today.toLocaleString())
    // // HTML의 특정 위치를 지정
    // var my_div = document.getElementById("my_div")
    // my_div.innerText = today.toLocaleString()

    setInterval(function() {var today = new Date() //날짜 객체 생성
        console.log(today.toLocaleString())
        // HTML의 특정 위치를 지정
        var my_div = document.getElementById("my_div")     // getElementById id를 통해서 엘리맨트에 접근
        my_div.innerText = today.toLocaleString()}, 1000)   // toLocaleString 문자열반환
}