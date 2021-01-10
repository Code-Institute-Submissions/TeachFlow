
//general page script //

// add a scrolling effect, in-place of jumping page location 
// credit: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll
$(document).ready(function () {
    // add to all <a></a> links
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      // Store hash
      let hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

// hide nav bar on scrolling
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

// add active class to home by default
$(document).ready(function () {
    $(".home").addClass("active");
});

// close the menu after each click (needed as some sections are on same page )
window.onclick = function () {
  let nav = document.getElementById("teachflownav");
  if (nav.classList.contains("show")) {
    nav.classList.remove("show");
  }
};


// add and remove active class on click
$(".nav-link").on("click", function() {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
});