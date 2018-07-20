//Insertando Google Maps a la plataforma

function myMap() {
var myCasa = new google.maps.LatLng(-12.017733, -77.051773);
var parqueTrabajo = new google.maps.LatLng(-12.029505, -77.044241);
var plazaDosMayo = new google.maps.LatLng(-12.046785, -77.042685);
var plazaBolognesi = new google.maps.LatLng(-12.060686, -77.041758);

var mapProp = {
  center:myCasa, zoom:15, 
  scrollwheel:true, 
  draggable:true, 
  mapTypeId:google.maps.MapTypeId.ROADMAP //tipos de mapa: SATELLITE, HYDRID, TERRAIR
};

var mapCanvas = document.getElementById('googleMap');
var mapMostrar = new google.maps.Map(mapCanvas, mapProp);

var marker = new google.maps.Marker({
  position:myCasa, 
  animation: google.maps.Animation.BOUNCE,
  icon: 'iconPosicion.png'
});
marker.setMap(mapMostrar);

 var trazarTrayectoria = new google.maps.Polyline({
    path: [myCasa, parqueTrabajo, plazaDosMayo, plazaBolognesi],  //Puntos principales a unir
    strokeColor: "#1C2833",  //Color de la línea
    strokeOpacity: 2, //[>=0 y <=1]
    strokeWeight: 3.5,  //Grosor de la línea
    editable: true  //Que el usuario pueda editar el recorrido
  });
trazarTrayectoria.setMap(mapMostrar);

var trazarRegion = new google.maps.Polygon({
    path: [myCasa, parqueTrabajo, plazaBolognesi],
    strokeColor: "#2980B9", //Color de la línea que marca la región 
    strokeOpacity: 0.8,   //Opacidad de la línea que rodea la región [0-1]
    strokeWeight: 3,  //Ancho de la línea que rodea el área
    fillColor: "#E74C3C", //Área de la región marcada. 
    fillOpacity: 0.4, //Opacidad del color de la región sombreada [0-1]
    editable: true  //Editar el área de la región. 
  });
  trazarRegion.setMap(mapMostrar);
};

