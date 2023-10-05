var wms_layers = [];


        var lyr_ESRIWorldImagery_0 = new ol.layer.Tile({
            'title': 'ESRI World Imagery ',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_MergedAffectedMunicipalities_1 = new ol.format.GeoJSON();
var features_MergedAffectedMunicipalities_1 = format_MergedAffectedMunicipalities_1.readFeatures(json_MergedAffectedMunicipalities_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MergedAffectedMunicipalities_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MergedAffectedMunicipalities_1.addFeatures(features_MergedAffectedMunicipalities_1);
var lyr_MergedAffectedMunicipalities_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MergedAffectedMunicipalities_1, 
                style: style_MergedAffectedMunicipalities_1,
                interactive: true,
                title: '<img src="styles/legend/MergedAffectedMunicipalities_1.png" /> Merged Affected Municipalities'
            });
var format_NEWWESTBAY_2 = new ol.format.GeoJSON();
var features_NEWWESTBAY_2 = format_NEWWESTBAY_2.readFeatures(json_NEWWESTBAY_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NEWWESTBAY_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NEWWESTBAY_2.addFeatures(features_NEWWESTBAY_2);
var lyr_NEWWESTBAY_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NEWWESTBAY_2, 
                style: style_NEWWESTBAY_2,
                interactive: true,
                title: '<img src="styles/legend/NEWWESTBAY_2.png" /> NEW WEST BAY'
            });
var lyr_ESRIBEND_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "ESRI BEND",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/ESRIBEND_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13488340.123843, 1622888.696850, 13489485.904906, 1623747.511900]
                            })
                        });
var lyr_SECTION105X05ESRISPECTRUM_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "SECTION 1 0.5X0.5 ESRI SPECTRUM",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SECTION105X05ESRISPECTRUM_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13489394.310763, 1623118.514195, 13490335.079606, 1623570.566906]
                            })
                        });
var lyr_SECTION205X05ESRISPECTRUM_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "SECTION 2 0.5X0.5 ESRI SPECTRUM",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/SECTION205X05ESRISPECTRUM_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13487809.595966, 1623475.368276, 13488560.162116, 1624537.250409]
                            })
                        });
var format_WESTBAYPRELIMSOUNDING_6 = new ol.format.GeoJSON();
var features_WESTBAYPRELIMSOUNDING_6 = format_WESTBAYPRELIMSOUNDING_6.readFeatures(json_WESTBAYPRELIMSOUNDING_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WESTBAYPRELIMSOUNDING_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WESTBAYPRELIMSOUNDING_6.addFeatures(features_WESTBAYPRELIMSOUNDING_6);
var lyr_WESTBAYPRELIMSOUNDING_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WESTBAYPRELIMSOUNDING_6, 
                style: style_WESTBAYPRELIMSOUNDING_6,
                interactive: true,
                title: 'WESTBAY PRELIM SOUNDING'
            });

lyr_ESRIWorldImagery_0.setVisible(true);lyr_MergedAffectedMunicipalities_1.setVisible(true);lyr_NEWWESTBAY_2.setVisible(true);lyr_ESRIBEND_3.setVisible(true);lyr_SECTION105X05ESRISPECTRUM_4.setVisible(true);lyr_SECTION205X05ESRISPECTRUM_5.setVisible(true);lyr_WESTBAYPRELIMSOUNDING_6.setVisible(true);
var layersList = [lyr_ESRIWorldImagery_0,lyr_MergedAffectedMunicipalities_1,lyr_NEWWESTBAY_2,lyr_ESRIBEND_3,lyr_SECTION105X05ESRISPECTRUM_4,lyr_SECTION205X05ESRISPECTRUM_5,lyr_WESTBAYPRELIMSOUNDING_6];
lyr_MergedAffectedMunicipalities_1.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'ADM3_EN': 'ADM3_EN', 'ADM3_PCODE': 'ADM3_PCODE', 'ADM3_REF': 'ADM3_REF', 'ADM3ALT1EN': 'ADM3ALT1EN', 'ADM3ALT2EN': 'ADM3ALT2EN', 'ADM2_EN': 'ADM2_EN', 'ADM2_PCODE': 'ADM2_PCODE', 'ADM1_EN': 'ADM1_EN', 'ADM1_PCODE': 'ADM1_PCODE', 'ADM0_EN': 'ADM0_EN', 'ADM0_PCODE': 'ADM0_PCODE', 'date': 'date', 'validOn': 'validOn', 'validTo': 'validTo', 'layer': 'layer', 'path': 'path', });
lyr_NEWWESTBAY_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_WESTBAYPRELIMSOUNDING_6.set('fieldAliases', {'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', });
lyr_MergedAffectedMunicipalities_1.set('fieldImages', {'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'ADM3_EN': 'TextEdit', 'ADM3_PCODE': 'TextEdit', 'ADM3_REF': 'TextEdit', 'ADM3ALT1EN': 'TextEdit', 'ADM3ALT2EN': 'TextEdit', 'ADM2_EN': 'TextEdit', 'ADM2_PCODE': 'TextEdit', 'ADM1_EN': 'TextEdit', 'ADM1_PCODE': 'TextEdit', 'ADM0_EN': 'TextEdit', 'ADM0_PCODE': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'validTo': 'DateTime', 'layer': '', 'path': '', });
lyr_NEWWESTBAY_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_WESTBAYPRELIMSOUNDING_6.set('fieldImages', {'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', });
lyr_MergedAffectedMunicipalities_1.set('fieldLabels', {'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'ADM3_EN': 'no label', 'ADM3_PCODE': 'no label', 'ADM3_REF': 'no label', 'ADM3ALT1EN': 'no label', 'ADM3ALT2EN': 'no label', 'ADM2_EN': 'no label', 'ADM2_PCODE': 'no label', 'ADM1_EN': 'no label', 'ADM1_PCODE': 'no label', 'ADM0_EN': 'no label', 'ADM0_PCODE': 'no label', 'date': 'no label', 'validOn': 'no label', 'validTo': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_NEWWESTBAY_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_WESTBAYPRELIMSOUNDING_6.set('fieldLabels', {'field_1': 'no label', 'field_2': 'no label', 'field_3': 'no label', });
lyr_WESTBAYPRELIMSOUNDING_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});