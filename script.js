// 지도 표시
var container = document.getElementById('map');
var options = {
    center: new kakao.maps.LatLng(37.529503938486904,126.96554486929178),   //기본위치는 용산
    level: 7    //지도의 확대축소 레벨
};

// //지도 생성 및 객체 리턴
var map = new kakao.maps.Map(container, options);

// // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
// var iwContent = '<div style="padding:5px;">Hello World!</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
//     iwRemoveable = true; // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다

// // 인포윈도우를 생성합니다
// var infowindow = new kakao.maps.InfoWindow({
//     content : iwContent,
//     removable : iwRemoveable
// });

// 지도 확대 축소 컨트롤. 각각의 버튼 누를시 확대,축소

function zoomIn() {
    map.setLevel(map.getLevel() - 1);
}
function zoomOut() {
    map.setLevel(map.getLevel() + 1);
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
var LatLngArr=[]
var count=0
var markers=[]
// 주소로 좌표를 찾아 LatLngArr에 위치정보 입력

// console.log("start")

async function looping(){
    for (var i = 0; i < locations.length; i++){
        // console.log("for start")
        function fori(i)
        {
            // console.log("i = ",i)
            // console.log(locations[i].address+"\n\n")
            geocoder.addressSearch(locations[i].address, function(result, status){
                if (status === kakao.maps.services.Status.OK) {
                    var coords = new kakao.maps.LatLng(result[0].y, result[0].x)
                    // console.log("inner i = ",i)
                    // console.log("y,x = ",result[0].y, result[0].x)
                    var marker = new kakao.maps.Marker({
                        map: map, // 마커를 표시할 지도
                        position: coords, // 마커를 표시할 위치
                        title : result[0].road_address.address_name, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                        clickable: true,
                        // image : markerImage // 마커 이미지
                    });
                    kakao.maps.event.addListener(marker, 'click', function() {
                            // console.log(result[0].road_address)
                            var hyperlink="https://map.kakao.com/link/search/"+result[0].road_address.address_name
                            window.open(hyperlink);
                    });
                    markers[i]=marker
                    marker.setMap(map)
                }
            })
        }
        fori(i)
    }
}

function main(){
looping()
// console.log("--------------------\nfinal markers=",markers)
}
main()

// 비동기에 뇌가 녹는다...