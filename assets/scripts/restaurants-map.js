function initMap() {

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: {
            lat: 51.215146, 
            lng: -0.798084
        }
    });

    /* Custom markers per location */
    /* Restaurants */
    var image = 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red1.png';
    var marker = new google.maps.Marker({
    position: {lat: 51.214995, lng: -0.801341},
    map: map,
    icon: image
    });
    var image = 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red2.png';
    var marker = new google.maps.Marker({
    position: {lat: 51.215565, lng: -0.799019},
    map: map,
    icon: image
    });
    var image = 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red3.png';
    var marker = new google.maps.Marker({
    position: {lat: 51.215505, lng: -0.799617},
    map: map,
    icon: image
    });
    var image = 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_red4.png';
    var marker = new google.maps.Marker({
    position: {lat: 51.218149, lng: -0.792887},
    map: map,
    icon: image
    });

    /* Pubs and Bars */
    var image = 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_blue1.png';
    var marker = new google.maps.Marker({
    position: {lat: 51.214965, lng: -0.799328},
    map: map,
    icon: image
    });
    var image = 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_blue2.png';
    var marker = new google.maps.Marker({
    position: {lat: 51.211797, lng: -0.796677},
    map: map,
    icon: image
    });
    var image = 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_blue3.png';
    var marker = new google.maps.Marker({
    position: {lat: 51.212999, lng: -0.798631},
    map: map,
    icon: image
    });
    var image = 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_blue4.png';
    var marker = new google.maps.Marker({
    position: {lat: 51.214811, lng: -0.798474},
    map: map,
    icon: image
    });

    /* Coffee Shops */
    var image = 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_green1.png';
    var marker = new google.maps.Marker({
    position: {lat: 51.214604, lng: -0.800193},
    map: map,
    icon: image
    });
    var image = 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_green2.png';
    var marker = new google.maps.Marker({
    position: {lat: 51.213364, lng: -0.799272},
    map: map,
    icon: image
    });
    var image = 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_green3.png';
    var marker = new google.maps.Marker({
    position: {lat: 51.215257, lng: -0.801746},
    map: map,
    icon: image
    });
    var image = 'https://raw.githubusercontent.com/Concept211/Google-Maps-Markers/master/images/marker_green4.png';
    var marker = new google.maps.Marker({
    position: {lat: 51.215104, lng: -0.799260},
    map: map,
    icon: image
    });

    var markerCluster = new MarkerClusterer(map, markers,
        {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}