require.config({
	baseUrl:"assets/scripts/lib",
    paths : {
        app:"../app"
    }
});

require(
	['jquery',
	'underscore',   
	'xml2jsobj',
	'app/gmaps-app',
	'text!../../dados/deputados.xml',
	'async!http://maps.google.com/maps/api/js?sensor=false'
    ], 
    function(_, $, xml2jsobj, gmapsApp, deputados_xml){  	
    	var gmaps = new gmapsApp();
    	gmaps.init();
    	var deputados = xml2jsobj($.parseXML(deputados_xml).documentElement);

		$('#modal_info').on('hidden', function () {
			$('#estados').focus();
		});

    	$('#estados').change( function (e) {
    		gmaps.clearMap();
			selected = _.where(deputados, {uf: this.value});
			gmaps.addMarkers(selected);
		});
    }
);