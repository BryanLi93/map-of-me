class Models {
    constructor () {
        class Marker {
            constructor (label, lat, lng, desc) {
                this.id = window.uuidv1();
                this.label = label;
                this.lat = lat;
                this.lng = lng;
                this.desc = desc;
                this.isShown = ko.observable(true);
            }
            getPosition () {
                return {
                    lat: this.lat,
                    lng: this.lng
                };
            }
        };
        this.markers = [];
        this.markers.push(new Marker('锚链厂宿舍', 32.2087169,119.4661806, '家2'));
        this.markers.push(new Marker('京口区实验小学', 32.211178, 119.468321, '小学'));
        this.markers.push(new Marker('桥梁厂宿舍', 32.214442, 119.4684427, '家3'));
        this.markers.push(new Marker('江南中学', 32.215004, 119.47549, '中学'));
        this.markers.push(new Marker('镇江一中', 32.18855, 119.500751, '高中'));
        this.markers.push(new Marker('江苏大学', 32.199403, 119.515293, '大学'));
    }
}
