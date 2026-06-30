var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_kecamatan_genteng_ar_1 = new ol.format.GeoJSON();
var features_kecamatan_genteng_ar_1 = format_kecamatan_genteng_ar_1.readFeatures(json_kecamatan_genteng_ar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kecamatan_genteng_ar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kecamatan_genteng_ar_1.addFeatures(features_kecamatan_genteng_ar_1);
var lyr_kecamatan_genteng_ar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kecamatan_genteng_ar_1, 
                style: style_kecamatan_genteng_ar_1,
                popuplayertitle: 'kecamatan_genteng_ar',
                interactive: true,
    title: 'kecamatan_genteng_ar<br />\
    <img src="styles/legend/kecamatan_genteng_ar_1_0.png" /> Embong Kaliasin<br />\
    <img src="styles/legend/kecamatan_genteng_ar_1_1.png" /> Genteng<br />\
    <img src="styles/legend/kecamatan_genteng_ar_1_2.png" /> Kapasari<br />\
    <img src="styles/legend/kecamatan_genteng_ar_1_3.png" /> Ketabang<br />\
    <img src="styles/legend/kecamatan_genteng_ar_1_4.png" /> Peneleh<br />' });
var format_Jalan_2 = new ol.format.GeoJSON();
var features_Jalan_2 = format_Jalan_2.readFeatures(json_Jalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_2.addFeatures(features_Jalan_2);
var lyr_Jalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_2, 
                style: style_Jalan_2,
                popuplayertitle: 'Jalan',
                interactive: true,
                title: '<img src="styles/legend/Jalan_2.png" /> Jalan'
            });
var format_RuteHalte_3 = new ol.format.GeoJSON();
var features_RuteHalte_3 = format_RuteHalte_3.readFeatures(json_RuteHalte_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuteHalte_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuteHalte_3.addFeatures(features_RuteHalte_3);
var lyr_RuteHalte_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuteHalte_3, 
                style: style_RuteHalte_3,
                popuplayertitle: 'Rute Halte',
                interactive: true,
                title: '<img src="styles/legend/RuteHalte_3.png" /> Rute Halte'
            });
var format_Destinasi_4 = new ol.format.GeoJSON();
var features_Destinasi_4 = format_Destinasi_4.readFeatures(json_Destinasi_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Destinasi_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Destinasi_4.addFeatures(features_Destinasi_4);
var lyr_Destinasi_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Destinasi_4, 
                style: style_Destinasi_4,
                popuplayertitle: 'Destinasi',
                interactive: true,
                title: '<img src="styles/legend/Destinasi_4.png" /> Destinasi'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_kecamatan_genteng_ar_1.setVisible(true);lyr_Jalan_2.setVisible(true);lyr_RuteHalte_3.setVisible(true);lyr_Destinasi_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_kecamatan_genteng_ar_1,lyr_Jalan_2,lyr_RuteHalte_3,lyr_Destinasi_4];
lyr_kecamatan_genteng_ar_1.set('fieldAliases', {'full_id': 'full_id', 'Kecamatan': 'Kecamatan', 'Kelurahan': 'Kelurahan', });
lyr_Jalan_2.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'bridge': 'bridge', 'tunnel': 'tunnel', 'width': 'width', 'highway': 'highway', 'surface': 'surface', 'railway': 'railway', 'layer': 'layer', 'oneway': 'oneway', 'name': 'name', 'smoothness': 'smoothness', });
lyr_RuteHalte_3.set('fieldAliases', {'Nama_Halte': 'Nama_Halte', 'Keterangan': 'Keterangan', 'Sumber': 'Sumber', 'Foto': 'Foto', });
lyr_Destinasi_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Foto': 'Foto', });
lyr_kecamatan_genteng_ar_1.set('fieldImages', {'full_id': 'TextEdit', 'Kecamatan': 'TextEdit', 'Kelurahan': 'TextEdit', });
lyr_Jalan_2.set('fieldImages', {'fid': 'TextEdit', 'osm_id': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', 'width': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'railway': 'TextEdit', 'layer': 'TextEdit', 'oneway': 'TextEdit', 'name': 'TextEdit', 'smoothness': 'TextEdit', });
lyr_RuteHalte_3.set('fieldImages', {'Nama_Halte': 'TextEdit', 'Keterangan': 'TextEdit', 'Sumber': 'TextEdit', 'Foto': 'TextEdit', });
lyr_Destinasi_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_kecamatan_genteng_ar_1.set('fieldLabels', {'full_id': 'no label', 'Kecamatan': 'no label', 'Kelurahan': 'no label', });
lyr_Jalan_2.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'bridge': 'no label', 'tunnel': 'no label', 'width': 'no label', 'highway': 'no label', 'surface': 'no label', 'railway': 'no label', 'layer': 'no label', 'oneway': 'no label', 'name': 'no label', 'smoothness': 'no label', });
lyr_RuteHalte_3.set('fieldLabels', {'Nama_Halte': 'inline label - always visible', 'Keterangan': 'no label', 'Sumber': 'no label', 'Foto': 'no label', });
lyr_Destinasi_4.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'hidden field', 'timestamp': 'hidden field', 'altitudeMo': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', 'Foto': 'no label', });
lyr_Destinasi_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});