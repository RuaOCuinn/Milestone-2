// following code taken from Google Maps API Marker Accessibility documentation
function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 6,
      center: { lat: 53.41291, lng: -8.24389 },
    });
  
    var locations = [
        [{ lat: 55.240833, lng: -6.511667 }, "Giants Causeway"],
        [{ lat: 53.579722, lng: -6.611944 }, "Hill of Tara"],
        [{ lat: 53.694712, lng: -6.475492 }, "Newgrange"],
        [{ lat: 53.760057, lng: -9.659387 }, "Croagh Patrick"],
    ];
   
    const infoWindow = new google.maps.InfoWindow();
   
    locations.forEach(([position, title],) => {
      const marker = new google.maps.Marker({
        position,
        map,
        title: `${title}`,
        optimized: false,
      });
      marker.addListener("click", () => {
        infoWindow.close();
        infoWindow.setContent(marker.getTitle());
        infoWindow.open(marker.getMap(), marker);
      });
    });
  }

  function callGiantsCauseway() {
    var map = new google.maps.Map(document.getElementById("column1"), {
      zoom: 10,
      center: { lat: 55.240833, lng: -6.511667 },
    });

    var infoWindow = new google.maps.InfoWindow();
    locations.forEach(([position, title],) => {
      const marker = new google.maps.Marker({
        position,
        map,
        title: `${title}`,
        optimized: false,
      });
      marker.addListener("click", () => {
        infoWindow.close();
        infoWindow.setContent(marker.getTitle());
        infoWindow.open(marker.getMap(), marker);
      });
    });

  }