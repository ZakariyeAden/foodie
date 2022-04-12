const burger = document.querySelector(".hamburger");

//Hamburger menu
burger.addEventListener("click", () => {
  document.querySelector("ul").classList.toggle("active");
  burger.classList.toggle("toggle");
});
// Google maps
function initialize(){
  let map = document.getElementById('map');
  let map_options = {
    center: new google.maps.LatLng(44.947778, -93.365468),
      zoom:16,
      mapTypeId: google.maps.MapTypeId.HYBRID
  }
  let new_map = new google.maps.Map(map, map_options)
}
google.maps.event.addDomListener(window, 'load', initialize);

