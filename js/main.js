var map;
var markers = [];
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 32.2140203, lng: 119.4682243},
    zoom: 18
  });
  console.log(markers);
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(null);
  }
}