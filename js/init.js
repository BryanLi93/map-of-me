var map,
    mapMarkers,
    mapInfoWindow,
    placeSearch;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 32.2140203, lng: 119.4682243 },
        zoom: 14
    });
}

function libLoadingErrorHandler(libName) {
    alert(`${libName} 加载异常，请刷新重试~`);
}

function AmapInit () {
    AMap.service('AMap.PlaceSearch',function(){//回调函数
        // 实例化PlaceSearch
        placeSearch= new AMap.PlaceSearch();
    })
}