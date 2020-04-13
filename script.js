var map

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.779295, lng: -122.419389},
        zoom: 12,
    })

    var markers = [
        {
            coords: {lat: 37.779295, lng: -122.419389},
            iconImage: "https://149351888.v2.pressablecdn.com/wp-content/uploads/2015/06/truck-icon-2.png",
            content: "<p>Civic Center</p>"
        },
        {
            coords: {lat: 37.808, lng: -122.417743},
            iconImage: "https://149351888.v2.pressablecdn.com/wp-content/uploads/2015/06/truck-icon-2.png",
            content:"<p>Fisherman's Wharf</p>"
        },
        {
            coords: {lat: 37.769775, lng: -122.414222},
            iconImage: "https://149351888.v2.pressablecdn.com/wp-content/uploads/2015/06/truck-icon-2.png",
            content:"<p>SOMA Street Food Park</p>"
        },
        {
            coords: {lat: 37.7761456, lng: -122.3915605},
            iconImage: "https://149351888.v2.pressablecdn.com/wp-content/uploads/2015/06/truck-icon-2.png",
            content:"<p>The Yard at Mission Rock</p>"
        },
        {
            coords: {lat: 37.7883406, lng: -122.4013815},
            iconImage: "https://149351888.v2.pressablecdn.com/wp-content/uploads/2015/06/truck-icon-2.png",
            content:"<p>The Truck Stop</p>"
        },
        {
            coords: {lat: 37.7922059, lng: -122.4035148},
            iconImage: "https://149351888.v2.pressablecdn.com/wp-content/uploads/2015/06/truck-icon-2.png",
            content:"<p>300 Pine</p>"
        }
    ]

    for(var i = 0; i < markers.length; i++) {
        addMarker(markers[i])
    }

    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map,
        })

        if(props.iconImage) {
            marker.setIcon(props.iconImage)
        }

        if(props.content) {
            var infoWindow = new google.maps.InfoWindow({
                content: props.content
            })

            marker.addListener("click", function() {
                infoWindow.open(map, marker)
            })
        }
    }

   
}

