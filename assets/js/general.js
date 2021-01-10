
//general page script //


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