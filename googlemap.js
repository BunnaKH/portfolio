function initMap(){
    var location = {
        lat: 50.128335199999995,
        lng:14.378309599999966
    }
    var map = new google.maps.Map(document.getElementById('google-map'),{
        zoom: 4,
        center: location
    });
    var marker = new google.maps.Marker({
        position:location,
        map:map
    });

}