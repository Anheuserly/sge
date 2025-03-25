function initMap() {
    const office = { lat: 28.4817, lng: 77.1873 }; // Replace with actual coordinates
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: office,
    });
    const marker = new google.maps.Marker({
        position: office,
        map: map,
    });
}