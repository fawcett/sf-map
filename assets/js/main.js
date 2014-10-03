var xhr = require('xhr');

var map = new L.mapbox.Map('map-container', {
        // remove the 'i'
        infoControl: false,
        // create a new attribution control
        attributionControl: true
    });

L.control.locate().addTo(map);

var stamenLayer = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
}).addTo(map);


map.attributionControl
    .addAttribution('Credits: <a href="https://github.com/fawcett/sf-map">David Fawcett</a>');

var geojson_layer_options = {
  pointToLayer: L.mapbox.marker.style,
  onEachFeature: function (feature, layer) {
    var html = '';
    if (feature.properties.web) {
      html += '<h3><a href="'+ feature.properties.web + '">' + feature.properties.title + '</a></h3>';
    } else {
      html += '<h3>' + feature.properties.title + '</h3>';
    }
    if (feature.properties.description) {
      html += '<p>' + feature.properties.description + '</p>';
    }
    if (feature.properties.address) {
      html += '<p>'+ feature.properties.address + '</p>';
    }
    html += '<div class="put"></div>';
    layer.bindPopup(html);
  }
};
var geojson_layer = new L.GeoJSON(null, geojson_layer_options);
geojson_layer.addTo(map);

var xhr_options = {
  uri:    'things.geojson',
  json:   true,
  method: 'get'
};
function callback(error, resp, geojson) {
  if (error) {
    console.log(error);
    return;
  }
  geojson_layer.addData(geojson);
}

xhr(xhr_options, callback);

module.exports = {
  map: map
};
