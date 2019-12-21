function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        
        center: new google.maps.LatLng (51.216123, -0.797505,),
            zoom: 11,
            streetViewControl: false,
            mapTypeControl: false,
    });

    /* Custom markers per location */
    var image = 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red1.png';
    var marker = new google.maps.Marker({
    position: {lat: 51.204270, lng: -0.835900},
    map: map,
    icon: image
    });
    var image = 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red2.png';
    var marker = new google.maps.Marker({
    position: {lat: 51.220992, lng: -0.765306},
    map: map,
    icon: image
    });
    var image = 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red3.png';
    var marker = new google.maps.Marker({
    position: {lat: 51.226493, lng: -0.722179},
    map: map,
    icon: image
    });
    var image = 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red4.png';
    var marker = new google.maps.Marker({
    position: {lat: 51.215297, lng: -0.797606},
    map: map,
    icon: image
    });
    var image = 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red5.png';
    var marker = new google.maps.Marker({
    position: {lat: 51.231755, lng: -0.802828},
    map: map,
    icon: image
    });
    var image = 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red6.png';
    var marker = new google.maps.Marker({
    position: {lat: 51.218917, lng: -0.782896},
    map: map,
    icon: image
    });
    var image = 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red7.png';
    var marker = new google.maps.Marker({
    position: {lat: 51.152874, lng: -0.797927},
    map: map,
    icon: image
    });
    var image = 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red8.png';
    var marker = new google.maps.Marker({
    position: {lat: 51.244007, lng: -0.863974},
    map: map,
    icon: image
    });

    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}