function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 6,
        center: {
            lat: 53.41291,
            lng: -8.24389
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        [{ lat: 55.240833, lng: -6.511667 }, "Giants Causeway"],
        { lat: 53.579722, lng: -6.611944 },
        { lat: 53.694712, lng: -6.475492 },
        { lat: 53.760057, lng: -9.659387 }
    ];

    var markers = locations.map(function(location, i){
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster= new MarkerClusterer(map, markers, {
    imagePath:"https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
});

}