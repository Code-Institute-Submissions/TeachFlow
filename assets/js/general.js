// Preloader
// create pre-loader function & add active class to home link by default
$(document).ready(function() {
  setTimeout(function () {  
    $('.pinwheel-wrapper').fadeIn("slow");
    $('.pinwheel-wrapper').delay(2000).fadeOut(4000);
    $(".home").addClass("active");
  });
  });

  // and remove active class on click
$(".nav-link").on("click", function() {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
}); 

// Hide Navbar on scroll down
var firstScroll = 0;
let scrolled;

//on scroll set the scrolled value to true;
$(window).on("scroll", function(){
    scrolled = true;
});

//if scrolled = true, call userScrolled func & set scrolled to false
setInterval(function() { 
    if (scrolled) {
        userScrolled(); 
        scrolled = false;
    }
}, 190);

function userScrolled() {
    let dist = $(this).scrollTop(); // dist = pixels scrolled
    let scrollMin = 0;
    let navUlHeight = $('nav').outerHeight(); //used later to make sure user has scrolled past navbar
    if(Math.abs(firstScroll - dist) <= scrollMin) // if 0 - dist  <= 0 then return
        return;  
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (dist > firstScroll && dist > navUlHeight){ //if dist > 0 and dist > navbar outer height then scroll down
        $('nav').removeClass('nav-down').addClass('scroll-up');
    } else {
        if(dist + $(window).height() < $(document).height()) { // dist + height of the (browser) window < height of the document being rendered
            $('nav').removeClass('scroll-up');         // Else scroll up
        }
    }
    firstScroll = dist;
}
// close the menu after each click (needed as some sections are on same page)
window.onclick = function () {
  let nav = document.getElementById("teachflownav");
  if (nav.classList.contains("show")) {
    nav.classList.remove("show");
  }
};

// Add smooth scrolling
// CREDIT: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
$(document).ready(function () {
  $("a[data-page='index']").on("click", function (event) { // add to all <a> links which jump to a specific section in index.html (does not work with game.html)
    if (this.hash !== "") {
      event.preventDefault();
      let hash = this.hash; // Store hash
      // 800 milliseconds taken to scroll
      $('html, body').animate({ //  jQuery's animate() method adds smooth page scroll
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // Add hash (id) to URL when scrolling complete
        window.location.hash = hash;
      });
    } 
  });
});