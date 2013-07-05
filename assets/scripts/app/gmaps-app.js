define(["underscore"], 
	function(_) {
		return function(){
			var map, infoWindow, markers, infoWindowHtml;

			this.init = function() {
				infoWindowHtml = [
				'<address>',
				'<strong><%= nomeParlamentar %></strong><br>',
				'<strong>Partido:</strong> <%= partido %><br>',
				'<abbr title="Telefone">Tel:</abbr> (61) <%= fone %><br>',
				'<a href="mailto:<%= email %>"><%= email %></a>',
				'</address>'].join('');

				markers = [];
				infoWindow = new google.maps.InfoWindow();
				map = new google.maps.Map(document.getElementById('map-canvas'),  {
					center: new google.maps.LatLng(-8.754795, -52.910156),
					zoom: 5,
					disableDefaultUI: true
				});
			}

			this.addMarkers = function(items){
				var bounds = new google.maps.LatLngBounds();
				_.each(items, function(item, key, list){
					console.log(item);
					var latLng = new google.maps.LatLng(item.cidadeNatal.lat, item.cidadeNatal.lng)

					var marker = new google.maps.Marker({
						position: latLng,
						map: map,
						icon: "http://www.google.com/mapfiles/markerD.png"
					});

					google.maps.event.addListener(marker, 'click', function() {
						infoWindow.setContent(infoWindowContent(item));
						infoWindow.open(map, this);
					});

					bounds.extend(latLng);
					map.fitBounds(bounds);
					markers.push(marker);
				});
			}

			this.clearMap = function(){
				_.each(markers, function(item, key, list){
					item.setMap(null);
				});
				markers = [];
			}

		}
	}
);