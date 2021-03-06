let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {

        center: {
            lat: 44.9778,
			lng: -93.2650
        },
        zoom: 14,
        mapTypeId: 'hybrid',
        fullScreenControlOptions: {
            position: google.maps.ControlPosition.RIGHT_BOTTOM
        }
    });

    let marker = new google.maps.Marker({
        position: {
            lat: 44.9736,
            lng: -93.2575
        },
        map: map,
        title: 'US Bank Stadium',
    });

    let infoWindow = new google.maps.InfoWindow({
        content: '<h4>US Bank Stadium</h4>'
    });

    marker.addListener( 'click', function() {
        infoWindow.open( map, marker );
    });

    const centerButton = document.querySelector( '#bringToCenter' );

    centerButton.addEventListener( 'click', function( e ) {
        e.preventDefault();
        map.setCenter({
            lat: 44.9736,
            lng: -93.2575
        })
    })

    
}


