ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:28193").setExtent([-645869.572702, 777707.552288, 999506.748108, 1606762.173092]);
var wms_layers = [];


        var lyr_GoogleSatellite = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
                attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Israel_Antiguo = new ol.format.GeoJSON();
var features_Israel_Antiguo = format_Israel_Antiguo.readFeatures(json_Israel_Antiguo, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_Israel_Antiguo = new ol.source.Vector({
        attributions: "<a class='legend'><b>Israel_Antiguo</b><br />\
        <img src='styles/legend/Israel_Antiguo_0.png' /> <br />\
        <img src='styles/legend/Israel_Antiguo_1.png' /> Aser<br />\
        <img src='styles/legend/Israel_Antiguo_2.png' /> Dan<br />\
        <img src='styles/legend/Israel_Antiguo_3.png' /> Efraím<br />\
        <img src='styles/legend/Israel_Antiguo_4.png' /> Gad<br />\
        <img src='styles/legend/Israel_Antiguo_5.png' /> Isacar<br />\
        <img src='styles/legend/Israel_Antiguo_6.png' /> Juda<br />\
        <img src='styles/legend/Israel_Antiguo_7.png' /> manases<br />\
        <img src='styles/legend/Israel_Antiguo_8.png' /> Mar Muerto<br />\
        <img src='styles/legend/Israel_Antiguo_9.png' /> Neftaly<br />\
        <img src='styles/legend/Israel_Antiguo_10.png' /> Ruben<br />\
        <img src='styles/legend/Israel_Antiguo_11.png' /> Simeón<br />\
        <img src='styles/legend/Israel_Antiguo_12.png' /> Zabulon<br /></a>"
            });
jsonSource_Israel_Antiguo.addFeatures(features_Israel_Antiguo);
var lyr_Israel_Antiguo = new ol.layer.Vector({
            declutter: false,
            source:jsonSource_Israel_Antiguo, 
            style: style_Israel_Antiguo,
            permalink: "Israel_Antiguo",
            popuplayertitle: "Israel_Antiguo",
            interactive: true,
            title: "<div id='layertitle'>Israel_Antiguo<br />\
            <i class='fas fa-angle-up' id='secondImage'></i><i class='fas fa-angle-down' id='firstImage'></i></div><a class='layerlegend'>\
            <img src='styles/legend/Israel_Antiguo_0.png' /> <br />\
            <img src='styles/legend/Israel_Antiguo_1.png' /> Aser<br />\
            <img src='styles/legend/Israel_Antiguo_2.png' /> Dan<br />\
            <img src='styles/legend/Israel_Antiguo_3.png' /> Efraím<br />\
            <img src='styles/legend/Israel_Antiguo_4.png' /> Gad<br />\
            <img src='styles/legend/Israel_Antiguo_5.png' /> Isacar<br />\
            <img src='styles/legend/Israel_Antiguo_6.png' /> Juda<br />\
            <img src='styles/legend/Israel_Antiguo_7.png' /> manases<br />\
            <img src='styles/legend/Israel_Antiguo_8.png' /> Mar Muerto<br />\
            <img src='styles/legend/Israel_Antiguo_9.png' /> Neftaly<br />\
            <img src='styles/legend/Israel_Antiguo_10.png' /> Ruben<br />\
            <img src='styles/legend/Israel_Antiguo_11.png' /> Simeón<br />\
            <img src='styles/legend/Israel_Antiguo_12.png' /> Zabulon<br /></a>"
                });
var extent_Israel_Antiguo = jsonSource_Israel_Antiguo.getExtent();
var buffer_extent_Israel_Antiguo = new ol.extent.buffer(extent_Israel_Antiguo, 200); //aumento extent di 50m
lyr_Israel_Antiguo.set('extent' , buffer_extent_Israel_Antiguo);


var format_Ciudades = new ol.format.GeoJSON();
var features_Ciudades = format_Ciudades.readFeatures(json_Ciudades, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_Ciudades = new ol.source.Vector({
        attributions: "<a class='legend'><b>Ciudades</b><br />\
        <img src='styles/legend/Ciudades_0.png' /> Arad<br />\
        <img src='styles/legend/Ciudades_1.png' /> Ashdod<br />\
        <img src='styles/legend/Ciudades_2.png' /> Ashkelon<br />\
        <img src='styles/legend/Ciudades_3.png' /> Bait Sheán<br />\
        <img src='styles/legend/Ciudades_4.png' /> Belen<br />\
        <img src='styles/legend/Ciudades_5.png' /> Bersheba<br />\
        <img src='styles/legend/Ciudades_6.png' /> Binyanima<br />\
        <img src='styles/legend/Ciudades_7.png' /> Eliat<br />\
        <img src='styles/legend/Ciudades_8.png' /> Gaza<br />\
        <img src='styles/legend/Ciudades_9.png' /> Haifa<br />\
        <img src='styles/legend/Ciudades_10.png' /> Hebron<br />\
        <img src='styles/legend/Ciudades_11.png' /> Jerico<br />\
        <img src='styles/legend/Ciudades_12.png' /> Jerusalem<br />\
        <img src='styles/legend/Ciudades_13.png' /> Khan Yunis<br />\
        <img src='styles/legend/Ciudades_14.png' /> Kiryat Gat<br />\
        <img src='styles/legend/Ciudades_15.png' /> Magen<br />\
        <img src='styles/legend/Ciudades_16.png' /> Mashabei Sadeh<br />\
        <img src='styles/legend/Ciudades_17.png' /> Nablus<br />\
        <img src='styles/legend/Ciudades_18.png' /> Nahariya<br />\
        <img src='styles/legend/Ciudades_19.png' /> Nasaret<br />\
        <img src='styles/legend/Ciudades_20.png' /> Netanya<br />\
        <img src='styles/legend/Ciudades_21.png' /> Rafa<br />\
        <img src='styles/legend/Ciudades_22.png' /> Rahanana<br />\
        <img src='styles/legend/Ciudades_23.png' /> Ramala<br />\
        <img src='styles/legend/Ciudades_24.png' /> Ramla<br />\
        <img src='styles/legend/Ciudades_25.png' /> Ramot<br />\
        <img src='styles/legend/Ciudades_26.png' /> Rishon LeZion<br />\
        <img src='styles/legend/Ciudades_27.png' /> Shitim<br />\
        <img src='styles/legend/Ciudades_28.png' /> Tel Aviv<br />\
        <img src='styles/legend/Ciudades_29.png' /> Yokneam<br />\
        <img src='styles/legend/Ciudades_30.png' /> <br /></a>"
            });
jsonSource_Ciudades.addFeatures(features_Ciudades);
var lyr_Ciudades = new ol.layer.Vector({
            declutter: false,
            source:jsonSource_Ciudades, 
            style: style_Ciudades,
            permalink: "Ciudades",
            popuplayertitle: "Ciudades",
            interactive: true,
            title: "<div id='layertitle'>Ciudades<br />\
            <i class='fas fa-angle-up' id='secondImage'></i><i class='fas fa-angle-down' id='firstImage'></i></div><a class='layerlegend'>\
            <img src='styles/legend/Ciudades_0.png' /> Arad<br />\
            <img src='styles/legend/Ciudades_1.png' /> Ashdod<br />\
            <img src='styles/legend/Ciudades_2.png' /> Ashkelon<br />\
            <img src='styles/legend/Ciudades_3.png' /> Bait Sheán<br />\
            <img src='styles/legend/Ciudades_4.png' /> Belen<br />\
            <img src='styles/legend/Ciudades_5.png' /> Bersheba<br />\
            <img src='styles/legend/Ciudades_6.png' /> Binyanima<br />\
            <img src='styles/legend/Ciudades_7.png' /> Eliat<br />\
            <img src='styles/legend/Ciudades_8.png' /> Gaza<br />\
            <img src='styles/legend/Ciudades_9.png' /> Haifa<br />\
            <img src='styles/legend/Ciudades_10.png' /> Hebron<br />\
            <img src='styles/legend/Ciudades_11.png' /> Jerico<br />\
            <img src='styles/legend/Ciudades_12.png' /> Jerusalem<br />\
            <img src='styles/legend/Ciudades_13.png' /> Khan Yunis<br />\
            <img src='styles/legend/Ciudades_14.png' /> Kiryat Gat<br />\
            <img src='styles/legend/Ciudades_15.png' /> Magen<br />\
            <img src='styles/legend/Ciudades_16.png' /> Mashabei Sadeh<br />\
            <img src='styles/legend/Ciudades_17.png' /> Nablus<br />\
            <img src='styles/legend/Ciudades_18.png' /> Nahariya<br />\
            <img src='styles/legend/Ciudades_19.png' /> Nasaret<br />\
            <img src='styles/legend/Ciudades_20.png' /> Netanya<br />\
            <img src='styles/legend/Ciudades_21.png' /> Rafa<br />\
            <img src='styles/legend/Ciudades_22.png' /> Rahanana<br />\
            <img src='styles/legend/Ciudades_23.png' /> Ramala<br />\
            <img src='styles/legend/Ciudades_24.png' /> Ramla<br />\
            <img src='styles/legend/Ciudades_25.png' /> Ramot<br />\
            <img src='styles/legend/Ciudades_26.png' /> Rishon LeZion<br />\
            <img src='styles/legend/Ciudades_27.png' /> Shitim<br />\
            <img src='styles/legend/Ciudades_28.png' /> Tel Aviv<br />\
            <img src='styles/legend/Ciudades_29.png' /> Yokneam<br />\
            <img src='styles/legend/Ciudades_30.png' /> <br /></a>"
                });
var extent_Ciudades = jsonSource_Ciudades.getExtent();
var buffer_extent_Ciudades = new ol.extent.buffer(extent_Ciudades, 200); //aumento extent di 50m
lyr_Ciudades.set('extent' , buffer_extent_Ciudades);


var format_Israel = new ol.format.GeoJSON();
var features_Israel = format_Israel.readFeatures(json_Israel, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:28193'});
var jsonSource_Israel = new ol.source.Vector({
            attributions: '<a class="legend"><img src="styles/legend/Israel.png" /> <b>Israel</b>'
            });
jsonSource_Israel.addFeatures(features_Israel);
var lyr_Israel = new ol.layer.Vector({
            declutter: false,
            source:jsonSource_Israel, 
            style: style_Israel,
            permalink: "Israel",
            popuplayertitle: "Israel",
            interactive: true,
            title: '<img src="styles/legend/Israel.png" /> Israel'
            });
var extent_Israel = jsonSource_Israel.getExtent();
var buffer_extent_Israel = new ol.extent.buffer(extent_Israel, 200); //aumento extent di 50m
lyr_Israel.set('extent' , buffer_extent_Israel);



lyr_GoogleSatellite.setVisible(true);lyr_Israel_Antiguo.setVisible(true);lyr_Ciudades.setVisible(true);lyr_Israel.setVisible(true);
var layersList = [lyr_GoogleSatellite,lyr_Israel_Antiguo,lyr_Ciudades,lyr_Israel];
lyr_Israel_Antiguo.set('fieldAliases', {'fid': 'fid', 'Tribu': 'Tribu', });
lyr_Ciudades.set('fieldAliases', {'fid': 'fid', 'Nombre': 'NOMBRE', 'Multimedia': 'VIDEO', });
lyr_Israel.set('fieldAliases', {'fid': 'fid', 'Nombre': 'Nombre', 'Area': 'Area', });
lyr_Israel_Antiguo.set('fieldImages', {'fid': 'TextEdit', 'Tribu': 'TextEdit', });
lyr_Ciudades.set('fieldImages', {'fid': 'TextEdit', 'Nombre': 'TextEdit', 'Multimedia': 'TextEdit', });
lyr_Israel.set('fieldImages', {'fid': 'TextEdit', 'Nombre': 'TextEdit', 'Area': 'TextEdit', });
lyr_Israel_Antiguo.set('fieldLabels', {'fid': 'no label', 'Tribu': 'no label', });
lyr_Ciudades.set('fieldLabels', {'fid': 'no label', 'Nombre': 'no label', 'Multimedia': 'no label', });
lyr_Israel.set('fieldLabels', {'fid': 'no label', 'Nombre': 'no label', 'Area': 'no label', });
lyr_Israel.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});