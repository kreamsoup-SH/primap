// 지도 표시
var container = document.getElementById('map');
var options = {
    center: new kakao.maps.LatLng(37.529503938486904,126.96554486929178),   //기본위치는 용산
    level: 7    //지도의 확대축소 레벨
};

// //지도 생성 및 객체 리턴
var map = new kakao.maps.Map(container, options);

// 지도 확대 축소 컨트롤. 각각의 버튼 누를시 확대,축소
function zoomIn() {
    map.setLevel(map.getLevel() - 1);
}
function zoomOut() {
    map.setLevel(map.getLevel() + 1);
}

// 오버레이 닫기 함수
function closeOverlay() {
    overlay.setMap(null);     
}

// 마커아이콘을 불러오기
// var HOME_PATH = window.HOME_PATH || '.';
// var MARKER_ICON_URL = HOME_PATH+'./data/img/chigusa-kusa.png';
var imageSrc = 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png'
var imageSize = new kakao.maps.Size(50,52);
var imageOption = {offset: new kakao.maps.Point(0,0)}
var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

// 주소-좌표 변환 객체를 생성
var geocoder = new kakao.maps.services.Geocoder();
var LatLngObj= {}
var counter=0
var markers=[]
// var locations [ {"name":"이름1","address":"주소1"}, ... ] in locations.js
// 주소로 좌표를 찾아 LatLngArr에 좌표정보 입력

locations.forEach(function(location){
    geocoder.addressSearch(location.address, function(result, status){
        if (status === kakao.maps.services.Status.OK){
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            LatLngObj[location.address]=coords
            // console.log("LatLngObj", LatLngObj)
            // console.log("LatLngObj[address] : " ,LatLngObj[location.address])
            var marker = new kakao.maps.Marker({
                map : map,
                position : coords,
                title : result[0].road_address.address_name,
                clickable : true,
                // image : markerImage
            })
            var iwContent = '<span class="a"><a href="https://map.kakao.com/link/search/'+result[0].address.address_name +'">'+location.name+'</a>'+'</span>'
            var iwRemoveable = true
            var infowindow = new kakao.maps.InfoWindow({
                content : iwContent,
                removable : iwRemoveable
            })
            // 마커 클릭시 이벤트리스너 생성
            kakao.maps.event.addListener(marker, 'click', function(){
                //이전에 존재한 인포윈도우 종료
                infowindow.close()
                //새로운 인포윈도우 오픈
                infowindow.open(map, marker)

                // var hyperlink="https://map.kakao.com/link/search/"+result[0].road_address.address_name
                // window.open(hyperlink);
            })
            markers.push(marker)
            // console.log("marker push : ", marker)
            // console.log("markers.length = ", markers.length)
            // console.log('\n')
        }
        else{
            console.log(location.address)
            console.log("!kakao.maps.services.Status.OK ERROR")
        }
        counter++
        // console.log("counter++ : ",counter)
        // console.log("locations.length : ",locations.length)
        if( counter === locations.length){
            doNext()
        }
    })
})
function doNext(){
    console.log("loaded completly\n")
    // console.log(LatLngObj);
    // console.log(markers)
}