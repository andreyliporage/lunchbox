var map

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 37.779295, lng: -122.419389},
        zoom: 12,
    })

    var marker = new google.maps.Marker({
        position: {lat: 37.809326, lng: -122.409981},
        map: map,
        icon: 'https://149351888.v2.pressablecdn.com/wp-content/uploads/2015/06/truck-icon-2.png'
    })
}

