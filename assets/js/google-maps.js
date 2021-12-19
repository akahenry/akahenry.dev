function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -30.0368, lng: -51.2090};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 10,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Porto Alegre, RS, Brazil' // Title Location
    });
}