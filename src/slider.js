<<<<<<< HEAD
var swiper = new Swiper('.slide-content', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
=======


var swiper = new Swiper('.swiper', {
  effect: 'flip',
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
>>>>>>> b3c21d8b367e001d268398cbe023130a50a6ca12
  },
});
