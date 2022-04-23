// gecoding API사용하여 locations csv파일내의 주소들의 위도,경도를 naver.maps.LatLng()로변환
// 변환된 위도,경도정보를 markers[]에 입력

headers = {
    "X-NCP-APIGW-API-KEY-ID" : "jtecemo209",
    "X-NCP-APIGW-API-KEY" : "PMD8dKwSjRZuvp51UgzHJfiHCP6tSxVCrUXyP9JK"
}
// $.ajax({
//     url: './data/locations_Seoul.csv',
//     dataType: 'text',
// }).done(csvToJson)
// function csvToJson(csv_string){
//     const rows = csv_string.split(/\r?\n|\r/);
//     const jsonArray = [];
//     const header = rows[0].split(",");
//     for(let i = 1; i< rows.length; i++){
//         let obj = {};
//         let row = rows[i].split(",");
//         for(let j=0; j<header.length; j++){
//             obj[header[j]] = row[j];
//         }
//         jsonArray.push(obj);
//     }
// }

var markers = [];
var position_arr = [[1,2],[3,4]];

console.log("before position_arr : ",position_arr)
var sample = "서울 용산구 한강대로23길 55"
AddressToCoordinate(sample)
console.log("!!!!")
console.log("after position_arr : ",position_arr)

var sample2 = "서울 노원구 공릉로 232"
AddressToCoordinate(sample2)
console.log("22!!!!")
console.log("22after position_arr : ",position_arr)

function AddressToCoordinate(address) {
    naver.maps.Service.geocode( {query: address}, callbackf(status, response, adtoco ))
}
function callbackf(status, response, parafunc){
    // 에러 처리 코드
    if (status === naver.maps.Service.Status.ERROR) {
        if (!address) {
            console.log("Geocode Error, Please check address");
            return -1;
        }
        console.log("Geocode Error, address:" + address[2]);
        return -1;
    }
    if (response.v2.meta.totalCount === 0) {
        console.log("No result ");
        return -2;
    }
    // 정상적 결과 발생시 아래코드실행
    var item=response.v2.addresses
    pos = [ item[0].y , item[0].x ]
    parafunc(pos)
}
function adtoco(items){
    position_arr.push(items)
}




/////////

/// 기본 init ///

// 마커아이콘을 불러오기
var HOME_PATH = window.HOME_PATH || '.';
var MARKER_ICON_URL = HOME_PATH+'./img/chigusa-kusa.png';

// 용산을 메인포지션으로 지정
var position_main = new naver.maps.LatLng(37.529503938486904, 126.96554486929178);

var map = new naver.maps.Map('map',{
    center: position_main,
    zoom: 17
});

console.log("33after position_arr : ",position_arr[3])

// 마커를 추가. markers[]에서 불러온다.
// for (var i in markers){
// }

var markerOptions={
    position: position_main.destinationPoint(0,20),
    map: map,
    icon: {
        url: MARKER_ICON_URL,
        size: new naver.maps.Size(50,52),
        origin: new naver.maps.Point(0,0),
        anchor: new naver.maps.Point(25,26)
    }
};


/// 지도에 보이는 마커만 표시하는 기능 ///
var bounds = map.getBounds();
var southWest = bounds.getSW();
var northEast = bounds.getNE();
var lngSpan = northEast.lng() - southWest.lng();
var latSpan = northEast.lat() - southWest.lat();

naver.maps.Event.addListener(map, 'idle', function() {
    updateMarkers(map, markers);
});

function updateMarkers(map, markers) {

    var mapBounds = map.getBounds();
    var marker, position;

    for (var i = 0; i < markers.length; i++) {

        marker = markers[i]
        position = marker.getPosition();

        if (mapBounds.hasLatLng(position)) {
            showMarker(map, marker);
        } else {
            hideMarker(map, marker);
        }
    }
}

function showMarker(map, marker) {

    if (marker.getMap()) return;
    marker.setMap(map);
}

function hideMarker(map, marker) {

    if (!marker.getMap()) return;
    marker.setMap(null);
}
