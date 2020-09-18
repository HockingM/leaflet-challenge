// Store our API endpoint inside queryUrl
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Perform a GET request to the query URL
d3.json(queryUrl, function (data) {
  // Once we get a response, send the data.features object to the createFeatures function
  createFeatures(data.features);
});

function createFeatures(earthquakeData) {

  // Define array to hold created circle markers
  var circleMarkers = [];

  // Loop through locations and create city and state markers
  for (var i = 0; i < earthquakeData.length; i++) {

    // Setting the marker radius for the state by passing earthquake into the markerSize function
    var lng = earthquakeData[i].geometry.coordinates[0];
    var lat = earthquakeData[i].geometry.coordinates[1];
    var circleSize = earthquakeData[i].properties.mag

    // Conditionals for earthquake points
    var fillColour = "";

    if (circleSize >= 5) {
      fillColour = "#FF3333";
    }
    else if (circleSize >= 4) {
      fillColour = "#FF6633";
    }
    else if (circleSize >= 3) {
      fillColour = "#FF9933";
    }
    else if (circleSize >= 2) {
      fillColour = "#FFCC33";
    }
    else if (circleSize >= 1) {
      fillColour = "#FFFF33";
    }
    else {
      fillColour = "#66FF33";
    }

    circleMarkers.push(
      L.circle([lat, lng], {
        stroke: true,
        fillOpacity: 0.75,
        color: "black",
        weight: 0.5,
        fillColor: getColor(circleSize),
        radius: (circleSize * 30000)
      }).bindPopup("<h3>" + earthquakeData[i].properties.place +
        "</h3><hr><p>" + new Date(earthquakeData[i].properties.time) + "</p>")
    );
  }

  // create legend
  var legend = L.control({ position: 'bottomright' });
  legend.onAdd = function (myMap) {

    var div = L.DomUtil.create('div', 'info legend'),
      scales = [0, 1, 2, 3, 4, 5];

    for (var i = 0; i < scales.length; i++) {

      div.innerHTML +=
        '<i class = "legend" + style = "background:' + getColor(scales[i]) + '"></i> ' +
        scales[i] + (scales[i + 1] ? '&ndash;' + scales[i + 1] + '<br>' : '+');
    }

    return div;
  };

  // send earthquakes array to the createMap function
  createMap(circleMarkers, legend);
}

function getColor(d) {
  return d >= 5 ? '#FF3333' :
    d >= 4 ? '#FF6633' :
      d >= 3 ? '#FF9933' :
        d >= 2 ? '#FFCC33' :
          d >= 1 ? '#FFFF33' :
            '#66FF33';
}

function createMap(circleMarkers, legend) {

  // create earthquakes layer
  var circles = L.layerGroup(circleMarkers);

  // create map with base layer and earthquakes layers to display on load
  var myMap = L.map("map", {
    center: [
      40.7607800, -111.8910500
    ],
    zoom: 5
  });

  // define map base layer
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/light-v10",
    accessToken: API_KEY
  }).addTo(myMap);

  circles.addTo(myMap);
  legend.addTo(myMap);

}
