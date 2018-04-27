class ViewModels {
    constructor (markers) {
        this.markers = ko.observableArray(markers);
        this.renderMap();
    }

    renderMap () {
        const markers = this.markers();
        for (let marker of markers) {
            new google.maps.Marker({
                position: marker.getPosition(),
                label: marker.label,
                map: window.map
            });
        }
    }
};