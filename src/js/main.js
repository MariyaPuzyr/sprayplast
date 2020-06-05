$(document).ready(function () {
  $(function () {
    function o() {
      return window.pageYOffset || document.documentElement.scrollTop
    }
    $(window).scroll(function () {
      o() >= 10 ? $(".navbar").addClass("fixed-menu") : $(".navbar").removeClass("fixed-menu")
    }).triggerHandler("scroll")
  });
  $('.get-texture-info').click(function () {
    $(".result").load("textures-detail.html");
  });
});