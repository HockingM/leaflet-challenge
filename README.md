# Leaflet 
Wk17 Visualising Data with Leaflet - Monash Data Analysis Bootcamp

![image](/images/leaflet.mp4)

## About the Project
This project was completed in 2 parts, using Leaflet to create visualisations of real-time earthquake data from the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page.  The page states it updates every minute.  

Using the URL, a JSON representation is pulled back for the selected dataset (_**All Earthquakes**_ from the _**Past 7 days**_ feed).  The latitude and longitude of each recorded event are used to plot circle markers that reflect the magnitude of each earthquake both in size and colour.  Circles appear larger and darker in colour the higher the earthquake's magitude.  Pop-ups have been added to each circle and provide additional information about the earthquake when any circle is clicked.  A legend has also been added to the map for context.

### Solutions
In Step-1, a single base layer is created, with zoom in and out functionality.  

For Step-2, a number of base maps have been added to the original base map, in a control layer that allows the user to toggle between different map selections by clicking each option.  Additional data has also been included to show the relationship between tectonic plates (fault lines) and earthquakes.  The data for the tectonic plates has been pulled from <https://github.com/fraxen/tectonicplates>. Both the earthquakes and the fault lines data have been created as individual overlays, each of which can be clicked 'on' or 'off', showing individually or both together.

Note: testing was done using `python -m http.server`to run the visualizations. This hosted the page at `localhost:8000` in my local web browser.


## Usage

### Step-1
1. Review requires a mapbox API Key.  Get a free mapbox API Key at: [Mapbox Getting Started](https://docs.mapbox.com/help/tutorials/get-started-tokens-api/)
  
2. Enter your API Key in 'config.js' at [./Leaflet-Step-1/static/js/config.js](./Leaflet-Step-1/static/js/config.js)
```JS
const API_KEY = 'ENTER YOUR API';
```

### Step-2
1. Review requires a mapbox API Key.  Get a free mapbox API Key at: [Mapbox Getting Started](https://docs.mapbox.com/help/tutorials/get-started-tokens-api/)
  
2. Enter your API Key in 'config.js' at [./Leaflet-Step-2/static/js/config.js](./Leaflet-Step-2/static/js/config.js)
```JS
const API_KEY = 'ENTER YOUR API';
```


## Built With

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [D3js](https://d3js.org/)
* [Leaflet](https://leafletjs.com/)


## Acknowledgements
* World tectonic plates and boundaries Retrieved from: [https://github.com/fraxen/tectonicplates](https://github.com/fraxen/tectonicplates)



