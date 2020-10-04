
### Folder structure
* **Leaflet-Step-1** folder containing files for a basic visualisation of earthquake data
    * **index.html** page for basic visualisation
    * **/static/js/logic.js** javascript file 
    * **/static/css/style.css** stylesheet

* **Leaflet-Step-2** folder containing files for visualisation of earthquake data + tectonic plate as overlays
    * **index.html** page for visualisation
    * **/static/js/logic.js** javascript file 
    * **/static/css/style.css** stylesheet

### Requirement
* an API key to allow map generation from [mapbox](https://www.mapbox.com/), to be placed in a **/static/js/config.js** file



# Leaflet 
Wk17 Visualising Data with Leaflet - Monash Data Analysis Bootcamp
================================================

## About the Project
This project was completed in 2 parts, using Leaflet to create visualisations of real-time earthquake data from the [USGS GeoJSON Feed](http://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) page.  The page states it updates every minute.  

Using the URL, a JSON representation is pulled back for the selected dataset (_All Earthquakes_ from the _Past 7 days_ feed).  The latitude and longitude of each recorded event are used to plot circle markers that reflect the magnitude of each earthquake both in size and colour.  Circles appear larger and darker in colour the higher the earthquake's magitude.  Pop-ups have been added to each circle and provide additional information about the earthquake when any circle is clicked.  A legend has also been added to the map for context.

In the Level 1 solution, a single base layer is created, with zoom in and out functionality.  For Part 2, a number of base maps have been added to the original base map, in a control layer that allows the user to toggle between different map selections by clicking each option.  Additional data has also been included to show the relationship between tectonic plates (fault lines) and earthquakes.  The data for the tectonic plates has been pulled from <https://github.com/fraxen/tectonicplates> and added as an additional layer. Both the earthquakes and the fault lines have been created as overlays which can be selected individually, together or both 'switched off' when each option is clicked in the control box.

Note: testing was done using `python -m http.server`to run the visualizations. This hosted the page at `localhost:8000` in my local web browser.


## Usage

- To view the individual solutions requires selecting the specific `<script> src` line in the [index.html](index.html) source code.

* To review Solution 1, [app.js](./assets/js/app.js), the file should be updated to show below and saved prior to execution. 
  ![image](html_screenshot.png)
  
* To review Solution 2, [bonusapp.js](./assets/js/bonusapp.js), the file should be updated to show below and saved prior to execution.  
  ![image](html_screenshot2.png)

* To review Solution 3, [bonusapp2.js](./assets/js/bonusapp2.js), the file should be updated to show below and saved prior to execution.  
  ![image](html_screenshot3.png)

## Built With

* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/javascript)
* [Html](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [d3js](https://d3js.org/)
* [Leaflet](https://leafletjs.com/)


## Acknowledgements
* 



