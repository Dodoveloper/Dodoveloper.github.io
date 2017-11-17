var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Meteorite_Landings_0 = new ol.format.GeoJSON();
var features_Meteorite_Landings_0 = format_Meteorite_Landings_0.readFeatures(json_Meteorite_Landings_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Meteorite_Landings_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Meteorite_Landings_0.addFeatures(features_Meteorite_Landings_0);var lyr_Meteorite_Landings_0 = new ol.layer.Vector({
                source:jsonSource_Meteorite_Landings_0, 
                style: style_Meteorite_Landings_0,
    title: 'Meteorite_Landings<br />\
    <img src="styles/legend/Meteorite_Landings_0_0.png" />  0.0000 - 0.0048 <br />\
    <img src="styles/legend/Meteorite_Landings_0_1.png" />  0.0048 - 0.0218 <br />\
    <img src="styles/legend/Meteorite_Landings_0_2.png" />  0.0218 - 0.0800 <br />\
    <img src="styles/legend/Meteorite_Landings_0_3.png" />  0.0800 - 0.3147 <br />\
    <img src="styles/legend/Meteorite_Landings_0_4.png" />  0.3147 - 3000.0000 <br />'
        });

lyr_Meteorite_Landings_0.setVisible(true);
var layersList = [baseLayer,lyr_Meteorite_Landings_0];
lyr_Meteorite_Landings_0.set('fieldAliases', {'name': 'name', 'id': 'id', 'nametype': 'nametype', 'recclass': 'Class', 'mass (g)': 'mass (g)', 'fall': 'fall', 'year': 'Year', 'reclat': 'reclat', 'reclong': 'reclong', 'GeoLocation': 'GeoLocation', 'Weight (Kg)': 'Weight (Kg)', 'years': 'Year', });
lyr_Meteorite_Landings_0.set('fieldImages', {'name': 'TextEdit', 'id': 'Hidden', 'nametype': 'Hidden', 'recclass': 'TextEdit', 'mass (g)': 'Hidden', 'fall': 'Hidden', 'year': 'Hidden', 'reclat': 'Hidden', 'reclong': 'Hidden', 'GeoLocation': 'Hidden', 'Weight (Kg)': 'TextEdit', 'years': 'TextEdit', });
lyr_Meteorite_Landings_0.set('fieldLabels', {'name': 'inline label', 'recclass': 'inline label', 'Weight (Kg)': 'inline label', 'years': 'inline label', });
lyr_Meteorite_Landings_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
    lyr_Meteorite_Landings_0.on("postcompose", update);

    var listenerKey = lyr_Meteorite_Landings_0.on('change', function(e) {
        update();
        ol.Observable.unByKey(listenerKey);
    });