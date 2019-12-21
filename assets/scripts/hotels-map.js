function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: {
            lat: 51.216123, 
            lng: -0.797505
        }
    });

    /* Custom markers per location */
    var image = 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red1.png';
    var marker = new google.maps.Marker({
    position: {lat: 51.219993, lng: -0.802312},
    map: map,
    icon: image
    });
    var image = 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red2.png';
    var marker = new google.maps.Marker({
    position: {lat: 51.212095, lng: -0.797075},
    map: map,
    icon: image
    });
    var image = 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red3.png';
    var marker = new google.maps.Marker({
    position: {lat: 51.169218, lng: -0.839272},
    map: map,
    icon: image
    });
    var image = 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red4.png';
    var marker = new google.maps.Marker({
    position: {lat: 51.228912, lng: -0.732036},
    map: map,
    icon: image
    });
    var image = 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red5.png';
    var marker = new google.maps.Marker({
    position: {lat: 51.183112, lng: -0.840733},
    map: map,
    icon: image
    });
    var image = 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red6.png';
    var marker = new google.maps.Marker({
    position: {lat: 51.192964, lng: -0.771185},
    map: map,
    icon: image
    });
    var image = 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red7.png';
    var marker = new google.maps.Marker({
    position: {lat: 51.218970, lng: -0.797906},
    map: map,
    icon: image
    });
    var image = 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red8.png';
    var marker = new google.maps.Marker({
    position: {lat: 51.158006, lng: -0.794244},
    map: map,
    icon: image
    });

    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}