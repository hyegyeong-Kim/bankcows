var option = {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
        
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  
 
}
var swiper_1 = new Swiper(".all", option );
var swiper_2 = new Swiper(".gyeonggi", option );
var swiper_3 = new Swiper(".Gangwon", option );
var swiper_4 = new Swiper(".Gyeongsang", option );
var swiper_5 = new Swiper(".Jeolla", option );