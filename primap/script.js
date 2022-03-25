var HOME_PATH = window.HOME_PATH || '.';
var MARKER_ICON_URL = HOME_PATH+'./img/chigusa-kusa.png';

var position= new naver.maps.LatLng(35.17982543369992, 129.07499499992576);

var map = new naver.maps.Map('map',{
    center: position,
    zoom: 17
});

var markerOptions={
    position: position.destinationPoint(0,20),
    map: map,
    icon: {
        url: MARKER_ICON_URL,
        size: new naver.maps.Size(50,52),
        origin: new naver.maps.Point(0,0),
        anchor: new naver.maps.Point(25,26)
    }
};

var markers = [];
var marker1 = new naver.maps.Marker(markerOptions);
markers.push(marker1)

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