class ViewModels {
    constructor (markers) {
        this.markers = ko.observableArray(markers);
        this.searchText = ko.observable("");
        this.renderMap();
    }

    renderMap () {
        const markers = this.markers(),
            that = this;
        if (window.mapMarkers) { // 更新 Google Map 中的 Markers
            for (let marker of markers) {
                window.mapMarkers[marker.id].setVisible(marker.isShown());
            }
        } else { // 初始化 Google Map 中的 Markers
            if (!window.google) {
                alert('请使用科学上网并刷新！');
                return;
            }

            window.mapMarkers = {};
            
            function toggleBounce() {
                if (this.getAnimation() !== null) {
                    this.setAnimation(null);
                } else {
                    this.setAnimation(google.maps.Animation.BOUNCE);
                }
                window.mapInfoWindow.setContent(that.markers().find(marker => {
                    return marker.id === this.id;
                }).desc);
                window.mapInfoWindow.open(map, this);
            }

            for (let marker of markers) {
                if (marker.isShown()) {
                    let mapMarkerInstance = new google.maps.Marker({
                        id: marker.id,
                        position: marker.getPosition(),
                        label: marker.label,
                        map: window.map,
                        animation: google.maps.Animation.DROP
                    });
                    mapMarkerInstance.addListener('click', toggleBounce);
                    window.mapMarkers[marker.id] = mapMarkerInstance;
                }
            }

            window.mapInfoWindow = new google.maps.InfoWindow();
        }
    }

    searchClick () {
        for (let marker of this.markers()) {
            marker.isShown(marker.label.includes(this.searchText()));
        }
        this.renderMap();
    }
    
};