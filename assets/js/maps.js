function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: { lat: 34.0479, lng: 100.6197 },
  });
  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });
  // Add a marker clusterer to manage the markers.
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
const locations = [
  { lat: 35.1796, lng: 129.0756 }, //busan
  { lat: 37.5665, lng: 126.9780 }, //seoul
  { lat: 35.8714, lng: 128.6014 }, //deagu
  { lat: 39.9042, lng: 116.4074 }, // beijing
  { lat: 31.2304, lng: 121.4737 }, //shanghai
  { lat: 22.5431, lng: 114.0579 }, //shenzhen
  { lat: 18.7883, lng: 98.9853 }, //chiang mai
  { lat: 7.8804, lng: 98.3923 }, //phuket
  { lat: 13.7563, lng: 100.5018 }, //bangkok
  { lat: 34.6937, lng: 135.5023 }, //Osaka
  { lat: 35.6762, lng: 139.6503 }, //Tokyo
  { lat: 35.0116, lng: 135.7681 }, //Kyoto
];