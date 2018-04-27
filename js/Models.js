class Models {
    constructor () {
        class Marker {
            constructor (label, lat, lng) {
                this.label = label;
                this.lat = lat;
                this.lng = lng;
            }
            getPosition () {
                return {
                    lat: this.lat,
                    lng: this.lng
                };
            }
        };
        this.markers = [];
        this.markers.push(new Marker('锚链厂宿舍', 32.2087169,119.4661806));
        this.markers.push(new Marker('京口区实验小学', 32.211178, 119.468321));
        this.markers.push(new Marker('桥梁厂宿舍', 32.214442, 119.4684427));
        this.markers.push(new Marker('江南中学', 32.215004, 119.47549));
        this.markers.push(new Marker('镇江一中', 32.18855, 119.500751));
        this.markers.push(new Marker('江苏大学', 32.199403, 119.515293));
    }
}
