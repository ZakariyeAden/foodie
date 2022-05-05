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

// Get modal, span, and close btn
let modal = document.getElementById('modal');
let btn = document.getElementById('triggerModal');
var span = document.getElementsByClassName('close')[0];
// When the user clicks on the btn 
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on the span
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Sticky navigation

// const heroSection = document.querySelector('#hero-section');

// const obs = new IntersectionObserver(
//   function(entries){
//     const ent = entries[0];
//     console.log(ent);

//     if(ent.isIntersecting === false){
//       document.body.classList.add("sticky");
//     }

//     if(ent.isIntersecting === false){
//       document.body.classList.add("sticky");
//     }
//   },
//   {
//     // In the viewport
//     root: null,
//     threshold: 0,
//     rootMargin: "-80px",
//   }
// );
// obs.observe(heroSection);



// Animation scroll reveal
window.sr = new ScrollReveal();
sr.reveal('.btn', { delay: 2000 });
sr.reveal('.heading-primary', { 
  duration: 2000,
  origin: 'bottom',
});
sr.reveal('.aside-img',{
  duration: 2000,
  origin: 'left',
  distance:'300px'
});
sr.reveal('.img',{
  duration: 2000,
  origin: 'top',
  distance:'300px'
});
sr.reveal('nav',{
  duration: 2000,
  origin: 'top',
  distance:'300px'
});
sr.reveal('.appetite',{
  duration: 5000,
  origin: 'bottom',
  distance:'300px'
});

sr.reveal('.main-heading',{
  duration: 5000,
  origin: 'bottom',
  distance:'300px'
});
sr.reveal('.menu',{
  duration: 5000,
  origin: 'bottom',
  distance:'300px'
});
sr.reveal('.card',{
  duration: 2000,
  origin: 'bottom',
  distance:'300px'
});
sr.reveal('.ft-subheading',{
  duration: 2000,
  origin: 'bottom',
  distance:'300px'
});
sr.reveal('.testimonial-subheading',{
  duration: 4000,
  origin: 'bottom',
  distance:'300px'
});
sr.reveal('#mp',{
  duration: 5000,
  origin: 'top',
  distance:'300px'
});