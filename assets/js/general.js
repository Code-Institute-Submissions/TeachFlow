
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

// Hide nav bar on scrolling
// CREDIT: https://bootstrap-menu.com/detail-smart-hide.html
/*if ($('.fixed-navbar').length > 0) {
    let last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop(); //set scrolltop value as dist from top to first element
        if(scroll_top < last_scroll_top)
        {
            $('.fixed-navbar').removeClass('scroll-down').addClass('scroll-up'); //add the navbar
        } else {
            
            $('.fixed-navbar').removeClass('scroll-up').addClass('scroll-down'); //hide nav bar
        }
        last_scroll_top = scroll_top;
    });
} */
 /* hideTimer = setTimeout(() => {
    document.getElementById("navbar").style.top = "0";
  }, 500); // delayed by 0.5 second
}*/

// Hide Navbar on scroll down
//https://codepen.io/fbmiranda/pen/edqgxm
var didScroll;
var lastScrollTop = 0;
var delta = 15;
var navbarHeight = $('nav').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('nav').removeClass('nav-down').addClass('scroll-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('nav').removeClass('scroll-up');
        }
    }
    
    lastScrollTop = st;
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