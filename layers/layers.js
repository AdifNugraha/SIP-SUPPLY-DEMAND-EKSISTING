var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_KabupatenKudus_1 = new ol.format.GeoJSON();
var features_KabupatenKudus_1 = format_KabupatenKudus_1.readFeatures(json_KabupatenKudus_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KabupatenKudus_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KabupatenKudus_1.addFeatures(features_KabupatenKudus_1);
var lyr_KabupatenKudus_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KabupatenKudus_1, 
                style: style_KabupatenKudus_1,
                popuplayertitle: 'Kabupaten Kudus',
                interactive: true,
                title: '<img src="styles/legend/KabupatenKudus_1.png" /> Kabupaten Kudus'
            });
var format_BatasKabupaten_2 = new ol.format.GeoJSON();
var features_BatasKabupaten_2 = format_BatasKabupaten_2.readFeatures(json_BatasKabupaten_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKabupaten_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKabupaten_2.addFeatures(features_BatasKabupaten_2);
var lyr_BatasKabupaten_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKabupaten_2, 
                style: style_BatasKabupaten_2,
                popuplayertitle: 'Batas Kabupaten',
                interactive: false,
                title: '<img src="styles/legend/BatasKabupaten_2.png" /> Batas Kabupaten'
            });
var format_BatasKecamatan_3 = new ol.format.GeoJSON();
var features_BatasKecamatan_3 = format_BatasKecamatan_3.readFeatures(json_BatasKecamatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasKecamatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasKecamatan_3.addFeatures(features_BatasKecamatan_3);
var lyr_BatasKecamatan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasKecamatan_3, 
                style: style_BatasKecamatan_3,
                popuplayertitle: 'Batas Kecamatan',
                interactive: false,
                title: '<img src="styles/legend/BatasKecamatan_3.png" /> Batas Kecamatan'
            });
var format_JaringanJalanKudus_4 = new ol.format.GeoJSON();
var features_JaringanJalanKudus_4 = format_JaringanJalanKudus_4.readFeatures(json_JaringanJalanKudus_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalanKudus_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalanKudus_4.addFeatures(features_JaringanJalanKudus_4);
var lyr_JaringanJalanKudus_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalanKudus_4, 
                style: style_JaringanJalanKudus_4,
                popuplayertitle: 'Jaringan Jalan Kudus',
                interactive: false,
    title: 'Jaringan Jalan Kudus<br />\
    <img src="styles/legend/JaringanJalanKudus_4_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/JaringanJalanKudus_4_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/JaringanJalanKudus_4_2.png" /> Jalan Lokal<br />\
    <img src="styles/legend/JaringanJalanKudus_4_3.png" /> Jalan Lingkungan<br />' });
var format_SupplyKopi_5 = new ol.format.GeoJSON();
var features_SupplyKopi_5 = format_SupplyKopi_5.readFeatures(json_SupplyKopi_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SupplyKopi_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SupplyKopi_5.addFeatures(features_SupplyKopi_5);
var lyr_SupplyKopi_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SupplyKopi_5, 
                style: style_SupplyKopi_5,
                popuplayertitle: 'Supply Kopi',
                interactive: true,
                title: '<img src="styles/legend/SupplyKopi_5.png" /> Supply Kopi'
            });
var format_SupplyKelapa_6 = new ol.format.GeoJSON();
var features_SupplyKelapa_6 = format_SupplyKelapa_6.readFeatures(json_SupplyKelapa_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SupplyKelapa_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SupplyKelapa_6.addFeatures(features_SupplyKelapa_6);
var lyr_SupplyKelapa_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SupplyKelapa_6, 
                style: style_SupplyKelapa_6,
                popuplayertitle: 'Supply Kelapa',
                interactive: true,
                title: '<img src="styles/legend/SupplyKelapa_6.png" /> Supply Kelapa'
            });
var format_SupplyTebu_7 = new ol.format.GeoJSON();
var features_SupplyTebu_7 = format_SupplyTebu_7.readFeatures(json_SupplyTebu_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SupplyTebu_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SupplyTebu_7.addFeatures(features_SupplyTebu_7);
var lyr_SupplyTebu_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SupplyTebu_7, 
                style: style_SupplyTebu_7,
                popuplayertitle: 'Supply Tebu',
                interactive: true,
                title: '<img src="styles/legend/SupplyTebu_7.png" /> Supply Tebu'
            });
var format_DemandTebu_8 = new ol.format.GeoJSON();
var features_DemandTebu_8 = format_DemandTebu_8.readFeatures(json_DemandTebu_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DemandTebu_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DemandTebu_8.addFeatures(features_DemandTebu_8);
var lyr_DemandTebu_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DemandTebu_8, 
                style: style_DemandTebu_8,
                popuplayertitle: 'Demand Tebu',
                interactive: true,
                title: '<img src="styles/legend/DemandTebu_8.png" /> Demand Tebu'
            });
var format_DemandKelapa_9 = new ol.format.GeoJSON();
var features_DemandKelapa_9 = format_DemandKelapa_9.readFeatures(json_DemandKelapa_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DemandKelapa_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DemandKelapa_9.addFeatures(features_DemandKelapa_9);
var lyr_DemandKelapa_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DemandKelapa_9, 
                style: style_DemandKelapa_9,
                popuplayertitle: 'Demand Kelapa',
                interactive: true,
                title: '<img src="styles/legend/DemandKelapa_9.png" /> Demand Kelapa'
            });
var format_DemandKopi_10 = new ol.format.GeoJSON();
var features_DemandKopi_10 = format_DemandKopi_10.readFeatures(json_DemandKopi_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DemandKopi_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DemandKopi_10.addFeatures(features_DemandKopi_10);
var lyr_DemandKopi_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DemandKopi_10, 
                style: style_DemandKopi_10,
                popuplayertitle: 'Demand Kopi',
                interactive: true,
                title: '<img src="styles/legend/DemandKopi_10.png" /> Demand Kopi'
            });
var group_SupplyDemandEksisting = new ol.layer.Group({
                                layers: [lyr_SupplyKopi_5,lyr_SupplyKelapa_6,lyr_SupplyTebu_7,lyr_DemandTebu_8,lyr_DemandKelapa_9,lyr_DemandKopi_10,],
                                fold: "open",
                                title: 'Supply Demand Eksisting'});
var group_BatasAdministrasi = new ol.layer.Group({
                                layers: [lyr_BatasKabupaten_2,lyr_BatasKecamatan_3,],
                                fold: "open",
                                title: 'Batas Administrasi'});

lyr_GoogleHybrid_0.setVisible(true);lyr_KabupatenKudus_1.setVisible(true);lyr_BatasKabupaten_2.setVisible(true);lyr_BatasKecamatan_3.setVisible(true);lyr_JaringanJalanKudus_4.setVisible(true);lyr_SupplyKopi_5.setVisible(true);lyr_SupplyKelapa_6.setVisible(true);lyr_SupplyTebu_7.setVisible(true);lyr_DemandTebu_8.setVisible(true);lyr_DemandKelapa_9.setVisible(true);lyr_DemandKopi_10.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_KabupatenKudus_1,group_BatasAdministrasi,lyr_JaringanJalanKudus_4,group_SupplyDemandEksisting];
lyr_KabupatenKudus_1.set('fieldAliases', {'NAMA_DESA': 'Desa', 'NAMA_KEC': 'Kecamatan', 'Sup Kelapa': 'Sup Kelapa', });
lyr_BatasKabupaten_2.set('fieldAliases', {'NAMA_DESA': 'Desa', 'NAMA_KEC': 'Kecamatan', 'NAMA_KAB': 'Kabupaten', 'NAMA_PROP': 'Provinsi', });
lyr_BatasKecamatan_3.set('fieldAliases', {'NAMA_DESA': 'Desa', 'NAMA_KEC': 'Kecamatan', 'NAMA_KAB': 'Kabupaten', 'NAMA_PROP': 'Provinsi', });
lyr_JaringanJalanKudus_4.set('fieldAliases', {'name': 'Jaringan Jalan', 'NAMRJL': 'Jaringan Jalan', 'Jaringan J': 'Jaringan Jalan', });
lyr_SupplyKopi_5.set('fieldAliases', {'NAMA_DESA': 'NAMA_DESA', 'NAMA_KEC': 'NAMA_KEC', 'SupplyKopi': 'SupplyKopi', });
lyr_SupplyKelapa_6.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'Ton': 'Ton', });
lyr_SupplyTebu_7.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'Ton': 'Ton', });
lyr_DemandTebu_8.set('fieldAliases', {'Name': 'Nama UMKM', 'KLASIF': 'Klasifikasi UMKM', 'JENIS': 'Produk UMKM', 'ALAMAT': 'Alamat', 'JAM': 'Jam Operasional', 'CP': 'Kontak', 'GAMBAR': 'GAMBAR', 'RATING': 'Rating', 'HMTL_GMBR': 'Gambar', });
lyr_DemandKelapa_9.set('fieldAliases', {'Name': 'Nama UMKM', 'KLASIF': 'Klasifikasi UMKM', 'JENIS': 'Produk UMKM', 'ALAMAT': 'Alamat', 'JAM': 'Jam Operasional', 'CP': 'Kontak', 'GAMBAR': 'GAMBAR', 'RATING': 'Rating', 'HMTL_GMBR': 'Gambar', });
lyr_DemandKopi_10.set('fieldAliases', {'Name': 'Nama UMKM', 'KLASIF': 'Klasifikasi UMKM', 'JENIS': 'Produk UMKM', 'ALAMAT': 'Alamat', 'JAM': 'Jam Operasional', 'CP': 'Kontak', 'GAMBAR': 'GAMBAR', 'RATING': 'Rating', 'HMTL_GMBR': 'Gambar', });
lyr_KabupatenKudus_1.set('fieldImages', {'NAMA_DESA': 'TextEdit', 'NAMA_KEC': 'TextEdit', 'Sup Kelapa': '', });
lyr_BatasKabupaten_2.set('fieldImages', {'NAMA_DESA': 'TextEdit', 'NAMA_KEC': 'TextEdit', 'NAMA_KAB': 'TextEdit', 'NAMA_PROP': 'TextEdit', });
lyr_BatasKecamatan_3.set('fieldImages', {'NAMA_DESA': 'TextEdit', 'NAMA_KEC': 'TextEdit', 'NAMA_KAB': 'TextEdit', 'NAMA_PROP': 'TextEdit', });
lyr_JaringanJalanKudus_4.set('fieldImages', {'name': 'TextEdit', 'NAMRJL': 'TextEdit', 'Jaringan J': 'TextEdit', });
lyr_SupplyKopi_5.set('fieldImages', {'NAMA_DESA': 'TextEdit', 'NAMA_KEC': 'TextEdit', 'SupplyKopi': 'TextEdit', });
lyr_SupplyKelapa_6.set('fieldImages', {'Kecamatan': 'TextEdit', 'Ton': 'TextEdit', });
lyr_SupplyTebu_7.set('fieldImages', {'Kecamatan': 'TextEdit', 'Ton': 'TextEdit', });
lyr_DemandTebu_8.set('fieldImages', {'Name': 'TextEdit', 'KLASIF': 'TextEdit', 'JENIS': 'TextEdit', 'ALAMAT': 'TextEdit', 'JAM': 'TextEdit', 'CP': 'TextEdit', 'GAMBAR': 'TextEdit', 'RATING': 'TextEdit', 'HMTL_GMBR': 'TextEdit', });
lyr_DemandKelapa_9.set('fieldImages', {'Name': 'TextEdit', 'KLASIF': 'TextEdit', 'JENIS': 'TextEdit', 'ALAMAT': 'TextEdit', 'JAM': 'TextEdit', 'CP': 'TextEdit', 'GAMBAR': 'TextEdit', 'RATING': 'TextEdit', 'HMTL_GMBR': 'TextEdit', });
lyr_DemandKopi_10.set('fieldImages', {'Name': 'TextEdit', 'KLASIF': 'TextEdit', 'JENIS': 'TextEdit', 'ALAMAT': 'TextEdit', 'JAM': 'TextEdit', 'CP': 'TextEdit', 'GAMBAR': 'TextEdit', 'RATING': 'TextEdit', 'HMTL_GMBR': 'TextEdit', });
lyr_KabupatenKudus_1.set('fieldLabels', {'NAMA_DESA': 'no label', 'NAMA_KEC': 'no label', 'Sup Kelapa': 'hidden field', });
lyr_BatasKabupaten_2.set('fieldLabels', {'NAMA_DESA': 'no label', 'NAMA_KEC': 'no label', 'NAMA_KAB': 'no label', 'NAMA_PROP': 'no label', });
lyr_BatasKecamatan_3.set('fieldLabels', {'NAMA_DESA': 'no label', 'NAMA_KEC': 'no label', 'NAMA_KAB': 'no label', 'NAMA_PROP': 'no label', });
lyr_JaringanJalanKudus_4.set('fieldLabels', {'name': 'no label', 'NAMRJL': 'no label', 'Jaringan J': 'no label', });
lyr_SupplyKopi_5.set('fieldLabels', {'NAMA_DESA': 'no label', 'NAMA_KEC': 'no label', 'SupplyKopi': 'no label', });
lyr_SupplyKelapa_6.set('fieldLabels', {'Kecamatan': 'no label', 'Ton': 'no label', });
lyr_SupplyTebu_7.set('fieldLabels', {'Kecamatan': 'no label', 'Ton': 'no label', });
lyr_DemandTebu_8.set('fieldLabels', {'Name': 'no label', 'KLASIF': 'no label', 'JENIS': 'no label', 'ALAMAT': 'no label', 'JAM': 'no label', 'CP': 'no label', 'GAMBAR': 'hidden field', 'RATING': 'no label', 'HMTL_GMBR': 'no label', });
lyr_DemandKelapa_9.set('fieldLabels', {'Name': 'no label', 'KLASIF': 'no label', 'JENIS': 'no label', 'ALAMAT': 'no label', 'JAM': 'no label', 'CP': 'no label', 'GAMBAR': 'hidden field', 'RATING': 'no label', 'HMTL_GMBR': 'no label', });
lyr_DemandKopi_10.set('fieldLabels', {'Name': 'no label', 'KLASIF': 'no label', 'JENIS': 'no label', 'ALAMAT': 'no label', 'JAM': 'no label', 'CP': 'no label', 'GAMBAR': 'hidden field', 'RATING': 'no label', 'HMTL_GMBR': 'no label', });
lyr_DemandKopi_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});