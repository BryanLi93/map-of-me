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
                return;
            }

            window.mapMarkers = {};
            
            function toggleBounce() {
                if (this.getAnimation() !== null) {
                    this.setAnimation(null);
                } else {
                    this.setAnimation(google.maps.Animation.BOUNCE);
                }
                const marker = that.markers().find(marker => {
                    return marker.id === this.id;
                });
                placeSearch.searchNearBy("", [marker.lng, marker.lat], 500, (status, result) => {
                    let text = '暂无信息';
                    if (status === 'complete' && result.info === 'OK') {
                        text = '附近有：';
                        for (const p of result.poiList.pois) {
                            text += p.name + '、';
                        }
                        text = text.substring(0, text.length - 1);
                    }
                    window.mapInfoWindow.setContent(text);
                    window.mapInfoWindow.open(map, this);
                });
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
    
    titleClick (marker) {
        google.maps.event.trigger(window.mapMarkers[marker.id], 'click');
    }
};