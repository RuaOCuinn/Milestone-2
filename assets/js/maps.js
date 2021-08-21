// following code taken from Google Maps API Marker Accessibility documentation
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 6,
      center: { lat: 53.41291, lng: -8.24389 },
    });
  
    const locations = [
        [{ lat: 55.240833, lng: -6.511667 }, "Giants Causeway"],
        [{ lat: 53.579722, lng: -6.611944 }, "Hill of Tara"],
        [{ lat: 53.694712, lng: -6.475492 }, "Newgrange"],
        [{ lat: 53.760057, lng: -9.659387 }, "Croagh Patrick"],
    ];
   
    const infoWindow = new google.maps.InfoWindow();
   
    locations.forEach(([position, title], i) => {
      const marker = new google.maps.Marker({
        position,
        map,
        title: `${i + 1}. ${title}`,
        label: `${i + 1}`,
        optimized: false,
      });

      marker.addListener("click", () => {
        infoWindow.close();
        infoWindow.setContent(marker.getTitle());
        infoWindow.open(marker.getMap(), marker);
      });
    });
  }