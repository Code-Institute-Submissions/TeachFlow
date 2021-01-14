
// Preloader
// create pre-loader function & add active class to home link by default
$(document).ready(function() {
  setTimeout(function () {  
    $('.pinwheel-wrapper').fadeIn("slow");
    $('.pinwheel-wrapper').delay(2000).fadeOut(4000);
    $(".home").addClass("active");
  });
  });

  // add and remove active class on click
$(".nav-link").on("click", function() {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
}); 

// Add smooth scrolling
// CREDIT: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
$(document).ready(function () {
  $("a.data-page").on("click", function (event) { // add to all <a> links which jump to a specific section in index.html (does not work with game.html)
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

// Hide nav bar on scrolling
// CREDIT: https://bootstrap-menu.com/detail-smart-hide.html
if ($('.fixed-navbar').length > 0) {
    let last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        if(scroll_top < last_scroll_top){
            $('.fixed-navbar').removeClass('scroll-down').addClass('scroll-up');
        } else {
            $('.fixed-navbar').removeClass('scroll-up').addClass('scroll-down');
        }
        last_scroll_top = scroll_top;
    });
} 

// close the menu after each click (needed as some sections are on same page)
window.onclick = function () {
  let nav = document.getElementById("teachflownav");
  if (nav.classList.contains("show")) {
    nav.classList.remove("show");
  }
};
