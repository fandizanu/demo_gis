var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Kalimantan_Timur_ADMIN_BPS_1 = new ol.format.GeoJSON();
var features_Kalimantan_Timur_ADMIN_BPS_1 = format_Kalimantan_Timur_ADMIN_BPS_1.readFeatures(json_Kalimantan_Timur_ADMIN_BPS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kalimantan_Timur_ADMIN_BPS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kalimantan_Timur_ADMIN_BPS_1.addFeatures(features_Kalimantan_Timur_ADMIN_BPS_1);
var lyr_Kalimantan_Timur_ADMIN_BPS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kalimantan_Timur_ADMIN_BPS_1, 
                style: style_Kalimantan_Timur_ADMIN_BPS_1,
                popuplayertitle: "Kalimantan_Timur_ADMIN_BPS",
                interactive: true,
    title: 'Kalimantan_Timur_ADMIN_BPS<br />\
    <img src="styles/legend/Kalimantan_Timur_ADMIN_BPS_1_0.png" /> Berau<br />\
    <img src="styles/legend/Kalimantan_Timur_ADMIN_BPS_1_1.png" /> Kota Balikpapan<br />\
    <img src="styles/legend/Kalimantan_Timur_ADMIN_BPS_1_2.png" /> Kota Bontang<br />\
    <img src="styles/legend/Kalimantan_Timur_ADMIN_BPS_1_3.png" /> Kota Samarinda<br />\
    <img src="styles/legend/Kalimantan_Timur_ADMIN_BPS_1_4.png" /> Kutai Barat<br />\
    <img src="styles/legend/Kalimantan_Timur_ADMIN_BPS_1_5.png" /> Kutai Kartanegara<br />\
    <img src="styles/legend/Kalimantan_Timur_ADMIN_BPS_1_6.png" /> Kutai Timur<br />\
    <img src="styles/legend/Kalimantan_Timur_ADMIN_BPS_1_7.png" /> Mahakam Hulu<br />\
    <img src="styles/legend/Kalimantan_Timur_ADMIN_BPS_1_8.png" /> Paser<br />\
    <img src="styles/legend/Kalimantan_Timur_ADMIN_BPS_1_9.png" /> Penajam Paser Utara<br />\
    <img src="styles/legend/Kalimantan_Timur_ADMIN_BPS_1_10.png" /> <br />'
        });
var format_JALAN_LN_50K_2 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_2 = format_JALAN_LN_50K_2.readFeatures(json_JALAN_LN_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_2.addFeatures(features_JALAN_LN_50K_2);
var lyr_JALAN_LN_50K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_50K_2, 
                style: style_JALAN_LN_50K_2,
                popuplayertitle: "JALAN_LN_50K",
                interactive: true,
                title: '<img src="styles/legend/JALAN_LN_50K_2.png" /> JALAN_LN_50K'
            });
var format_SUNGAI_LN_50K_3 = new ol.format.GeoJSON();
var features_SUNGAI_LN_50K_3 = format_SUNGAI_LN_50K_3.readFeatures(json_SUNGAI_LN_50K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_50K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_50K_3.addFeatures(features_SUNGAI_LN_50K_3);
var lyr_SUNGAI_LN_50K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_LN_50K_3, 
                style: style_SUNGAI_LN_50K_3,
                popuplayertitle: "SUNGAI_LN_50K",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_50K_3.png" /> SUNGAI_LN_50K'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_Kalimantan_Timur_ADMIN_BPS_1.setVisible(true);lyr_JALAN_LN_50K_2.setVisible(true);lyr_SUNGAI_LN_50K_3.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_Kalimantan_Timur_ADMIN_BPS_1,lyr_JALAN_LN_50K_2,lyr_SUNGAI_LN_50K_3];
lyr_Kalimantan_Timur_ADMIN_BPS_1.set('fieldAliases', {'ADM0_EN': 'ADM0_EN', 'date': 'date', 'validOn': 'validOn', 'PROVINCE': 'PROVINCE', 'Kabupaten': 'Kabupaten', 'PRV2': 'PRV2', 'Luas_area': 'Luas_area', });
lyr_JALAN_LN_50K_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SUNGAI_LN_50K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Kalimantan_Timur_ADMIN_BPS_1.set('fieldImages', {'ADM0_EN': 'TextEdit', 'date': 'DateTime', 'validOn': 'DateTime', 'PROVINCE': 'TextEdit', 'Kabupaten': 'TextEdit', 'PRV2': 'TextEdit', 'Luas_area': '', });
lyr_JALAN_LN_50K_2.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', });
lyr_SUNGAI_LN_50K_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPSNG': 'TextEdit', 'KLSSNG': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'STATUS': 'TextEdit', 'WMAX': 'TextEdit', 'DBTMAX': 'TextEdit', 'SLPRT': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_Kalimantan_Timur_ADMIN_BPS_1.set('fieldLabels', {'ADM0_EN': 'no label', 'date': 'no label', 'validOn': 'no label', 'PROVINCE': 'no label', 'Kabupaten': 'no label', 'PRV2': 'no label', 'Luas_area': 'no label', });
lyr_JALAN_LN_50K_2.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SUNGAI_LN_50K_3.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SUNGAI_LN_50K_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});