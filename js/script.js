let map;
let buildings = {};

// Initialize and add the map
function initMap() {
  // The map, centered at Gedung Direktorat POLINES
  const centerLocation = { lat: -7.052120, lng: 110.435587 }; // Koordinat Gedung Direktorat POLINES

  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 18,
    center: centerLocation,
    mapTypeId: "roadmap",  // Display normal (roadmap) view
    disableDefaultUI: true,  // Disable default map controls (zoom, street view, etc.)
    zoomControl: true,       // Enable zoom control
    styles: [
      {
        featureType: "poi",  // Hides Points of Interest like businesses and attractions
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "transit",  // Hides transit lines and stations
        elementType: "geometry",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "administrative",  // Hides administrative labels like country, state names
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "road",  // Hides road names
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
    ],
  });

  // Define the location and polygon of Gedung Direktorat POLINES
  const direktionBuildingLocation = { lat: -7.052120, lng: 110.435587 }; // Lokasi gedung
  const direktionBuildingPolygon = [
    { lat: -7.052210, lng: 110.435500 },
    { lat: -7.052320, lng: 110.435600 },
    { lat: -7.052150, lng: 110.435750 },
    { lat: -7.052010, lng: 110.435650 },
    { lat: -7.052210, lng: 110.435500 },
  ];

  // Add marker and polygon for Gedung Direktorat POLINES
  buildings['direktorat'] = addBuilding(direktionBuildingLocation, 'Gedung Direktorat POLINES', direktionBuildingPolygon);
}

// Add a building marker and polygon
function addBuilding(location, title, polygonCoords) {
  const marker = new google.maps.Marker({
    position: location,
    map: map,
    title: title,
  });

  const polygon = new google.maps.Polygon({
    paths: polygonCoords,
    strokeColor: "#0000FF",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#0000FF",
    fillOpacity: 0.35,
  });
  
  polygon.setMap(map);
  
  marker.addListener('click', () => {
    new google.maps.InfoWindow({
      content: `<b>${title}</b><br>Gedung Utama Politeknik Negeri Semarang.`,
    }).open(map, marker);
  });

  return { marker, polygon };
}

//coba push
// Function to navigate to the building
function goToBuilding(buildingKey) {
  const building = buildings[buildingKey];
  if (building) {
    map.panTo(building.marker.getPosition());
    map.setZoom(19);
  }
}
