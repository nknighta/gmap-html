const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const loadstatus = document.getElementById('loadstatus');

const zoomp = params.get('zoomp');
const longitude = params.get('longitude');
const latitude = params.get('latitude');
console.log(zoomp);

const [preLongitude, preLatitude] = [longitude, latitude];

let changedzoomrange = false;
let zoomvalue = 18;
window.addEventListener('DOMContentLoaded', () => {
  loadstatus.innerHTML = 'init...';
  getPosition();
});

const base = document.getElementById('main');

// dpxh
const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

const pitchinput = document.getElementById('pitchinput');
const mapinit = document.getElementById('map');


function getPosition(zoomvalue) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      let nowLatitude = position.coords.latitude;
      let nowLongitude = position.coords.longitude;
      loadstatus.innerHTML = 'success!';

      map.jumpTo({
        center: [preLongitude || nowLongitude, preLatitude || nowLatitude],
        zoom: zoomvalue || zoomp || 18,
      });
      console.log(nowLongitude, nowLatitude);
    },
  )
}
function currentPosition(zoomvalue) {
  navigator.geolocation.getCurrentPosition(
    function (position) {
      let nowLatitude = position.coords.latitude;
      let nowLongitude = position.coords.longitude;
      loadstatus.innerHTML = 'success!';

      map.jumpTo({
        center: [nowLongitude, nowLatitude],
        zoom: zoomvalue || zoomp || 18,
      });
      console.log(nowLongitude, nowLatitude);
    },
  )
}

let map = new maplibregl.Map({
  container: 'map',
  style: 'https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json', // 地図のスタイル
  center: [139.8108103, 35.7100069], // 中心座標
  zoom: 16,
})  
