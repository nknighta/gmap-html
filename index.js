
window.addEventListener('DOMContentLoaded', () => {
  getPosition();
});

const base = document.getElementById('main');
// dpxh
const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

const pitchinput = document.getElementById('pitchinput');

let map = new maplibregl.Map({
  container: 'map',
  style: 'https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json', // 地図のスタイル
  center: [139.8108103, 35.7100069], // 中心座標
  zoom: 16,
})

const loadstatus = document.getElementById('loadstatus');

map.on('load', () => {
  loadstatus.innerHTML = '🟩loaded';
});

map.on('move', () => {
  loadstatus.style.display = 'block';
  loadstatus.innerHTML = '🟥loading...';
});

map.on('moveend', () => {
  loadstatus.innerHTML = '🟩loaded';
});

function getPosition() {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      loadstatus.innerHTML = 'loading...';

      let nowLatitude = position.coords.latitude;
      let nowLongitude = position.coords.longitude;

      map.jumpTo({
        center: [nowLongitude, nowLatitude],
        zoom: 18.2,
      });
    },
  )
}


pitchinput.addEventListener('input', (e) => {
  map.setPitch(Number(e.target.value));
});