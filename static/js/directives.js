app.directive('directionsMap', function(){
  return {
    restrict: 'A',
    //template: '<div></div>',
    link: function (scope, element, attrs) {

      //var mapEl = element.children()[0];
      var mapEl = element[0];

      console.log(mapEl);

      var myLatLng = {lat: 40.884587,  lng: -111.884628 };
      var mueller_park = {lat: 40.868748,   lng: -111.846699 };
      
      var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';

      var baseballIcon = "/static/img/baseball.jpg"

      var map = new google.maps.Map(mapEl, {
        zoom: 13,
        center: myLatLng
      });

      var mueller_park_marker = new google.maps.Marker({
        position: mueller_park,
        map: map,
        title: "Mueller Park"
      });
    }
  };
});