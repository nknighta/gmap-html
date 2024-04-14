const base = document.getElementById('main');
// dpxh
const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

let map = new maplibregl.Map({
    container: 'map',
    style: 'https://tile.openstreetmap.jp/styles/osm-bright-ja/style.json', // 地図のスタイル
    center: [139.8108103, 35.7100069], // 中心座標
    zoom: 13, 
    pitch: 0 // 傾き
})

function getPosition(){
    navigator.geolocation.getCurrentPosition(
      function(position){
        let nowLatitude = position.coords.latitude;
        let nowLongitude = position.coords.longitude;
  
        map.jumpTo({
          center: [nowLongitude, nowLatitude],
          zoom: 16
        });
      },
    );
  }
  