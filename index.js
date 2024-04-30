let swiperPrevBtn = document.querySelector(".swiper-button-prev");
let swiperNextBtn = document.querySelector(".swiper-button-next");

//Initialize Swiper
const swiper = new Swiper(".swiper1", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  // autoplay: {
  //   delay: 5000,
  // },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
    modifierClass: "swiper-pagination-custom-",
    renderProgressbar: function (progressbarFillClass) {
      return '<span class="' + progressbarFillClass + '"></span>';
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const swiper2 = new Swiper(".swiper2", {
  direction: "horizontal",
  loop: true,
  // autoplay: {
  //   delay: 5000,
  // },

  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
    modifierClass: "swiper-pagination-custom-",
    renderProgressbar: function (progressbarFillClass) {
      return '<span class="' + progressbarFillClass + '"></span>';
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
