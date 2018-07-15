<!DOCTYPE html>
<html>
<body>
<div id="map" style="width:100%;height:500px"></div>
<script>
      function myMap() {
          navigator.geolocation.getCurrentPosition( success, fail );
      }

     function success(position)
     {
        var myCenter = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var mapCanvas = document.getElementById("map");
        var mapOptions = {center: myCenter, zoom: 5};
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({position:myCenter});
        marker.setMap(map);

        // Zoom to 9 when clicking on marker
        google.maps.event.addListener(marker,'click',function() {
          map.setZoom(15);
          map.setCenter(marker.getPosition());
        });
     }

     function fail()
     {
        // Could not obtain location
     }
</script>

<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU&callback=myMap"></script>

</body>
</html>
