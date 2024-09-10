// Inisialisasi peta
var map = L.map('map').setView([-7.052120379739278, 110.4355867990092], 18); // Sesuaikan dengan lokasi Changi Airport

// Tambahkan Tile Layer untuk peta
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Tambahkan Marker
var terminal3Marker = L.marker([-7.052305548510228, 110.43497612938614]).addTo(map)
    .bindPopup('<b>Terminal 3</b><br>Changi Airport.')
    .openPopup();

// Control interaktif untuk berpindah antara terminal
var terminalButtons = L.control({position: 'topright'});

terminalButtons.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'terminal-buttons');
    div.innerHTML = `
        <button onclick="goToTerminal(1)">Terminal 1</button>
        <button onclick="goToTerminal(2)">Terminal 2</button>
        <button onclick="goToTerminal(3)">Terminal 3</button>
    `;
    return div;
};

terminalButtons.addTo(map);

// Fungsi untuk navigasi ke terminal yang berbeda
function goToTerminal(terminalNumber) {
    switch(terminalNumber) {
        case 1:
            map.setView([-7.052120379739278, 110.4355867990092], 18); // Koordinat untuk Terminal 1
            break;
        case 2:
            map.setView([-7.052305548510228, 110.43497612938614], 18); // Koordinat untuk Terminal 2
            break;
        case 3:
            map.setView([-7.052120379739278, 110.4355867990092], 18); // Koordinat untuk Terminal 3
            break;
    }
}