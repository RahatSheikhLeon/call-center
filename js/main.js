$("#toggle").click(function() {
  $(this).toggleClass("on");
  $("#menu").slideToggle();
  $('.navigation').toggle();
});