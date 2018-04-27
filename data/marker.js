class Marker {
  constructor (place, lat, lng) {
    this.place = place;
    this.lat = lat;
    this.lng = lng;
  }
};
// const markers = [{
//   place: '锚链厂宿舍',
//   lat: ,

// }, {
//   place: '桥梁厂宿舍'
// }];
let markers = [];
markers.push(new Marker('锚链厂宿舍', 32.2087169,119.4661806));
markers.push(new Marker('桥梁厂宿舍', 32.214442, 119.4684427));

export default markers;