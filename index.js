document.addEventListener("DOMContentLoaded", function () {
  const selectButtonLang = document.querySelector(".select__lang-selected");
  const selectListLang = document.querySelector(".select-lang__list");
  const mobileMenu = document.querySelector(".mobile__menu");
  const btnHumburger = document.querySelector(".header__humburger");
  const btnCloseMobile = document.querySelector(".head__menu-close");
  const mobileMenuInner = document.querySelector(".mobile__menu-inner");

  if (btnHumburger && mobileMenu && btnCloseMobile) {
    btnHumburger.addEventListener("click", function () {
      toggleMobileMenu(true);
    });

    btnCloseMobile.addEventListener("click", function () {
      toggleMobileMenu(false);
    });

    document.addEventListener("mouseup", function (e) {
      if (
        mobileMenu.classList.contains("show-mobile") &&
        !mobileMenuInner.contains(e.target)
      ) {
        toggleMobileMenu(false);
      }
    });
  }

  function toggleMobileMenu(show) {
    mobileMenu.classList.toggle("show-mobile", show);
    document.body.style.overflow = show ? "hidden" : "auto";
  }

  if (selectButtonLang && selectListLang) {
    selectButtonLang.addEventListener("click", function () {
      selectListLang.classList.toggle("show");
      this.classList.toggle("has_show");
    });
    document.addEventListener("click", function (event) {
      const isClickInsideList = selectListLang.contains(event.target);
      const isClickOnButton = selectButtonLang.contains(event.target);

      if (!isClickInsideList && !isClickOnButton) {
        selectListLang.classList.remove("show");
        selectButtonLang.classList.remove("has_show");
      }
    });
  }
});

window.addEventListener("resize", function () {
  if (window.innerWidth <= 600) {
    window.removeEventListener("scroll", scrollHandler);
  } else {
    window.addEventListener("scroll", scrollHandler);
  }
});

function scrollHandler() {
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  const scrollY = window.scrollY || window.pageYOffset;

  if (scrollY > 45) {
    header.classList.add("fixed");
    main.classList.add("change");
  } else {
    header.classList.remove("fixed");
    main.classList.remove("change");
  }
}

if (window.innerWidth > 600) {
  window.addEventListener("scroll", scrollHandler);
}

let swiperPrevBtn = document.querySelector(".swiper-button-prev");
let swiperNextBtn = document.querySelector(".swiper-button-next");

//Initialize Swiper
const swiper = new Swiper(".swiper1", {
  // Optional parameters
  direction: "horizontal",
  speed: 1200,
  autoplay: {
    delay: 3000,
  },
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
swiper.on("slideChange", function () {
  if (swiper.isBeginning) {
    swiperPrevBtn.classList.add("disabled");
  } else {
    swiperPrevBtn.classList.remove("disabled");
  }
  if (swiper.isEnd) {
    swiperNextBtn.classList.add("disabled");
  } else {
    swiperNextBtn.classList.remove("disabled");
  }
});

const swiper2 = new Swiper(".swiper2", {
  direction: "horizontal",
  loop: true,
  // autoplay: {
  //   delay: 5000,
  // },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
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

  allowTouchMove: false,
  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
const swiper3 = new Swiper(".swiper3", {
  direction: "horizontal",
  loop: false,
  autoplay: {
    delay: 5000,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
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
let options = {
  root: null,
  rootMargin: "0px",
  threshold: 1,
  trackVisibility: true,
  delay: 100,
};
let items = document.querySelectorAll(".activity__right-item");
let spans = document.querySelectorAll(".activity__line-span");
const intersection = (target) => {
  let callback = function (entries, observer) {
    entries.forEach((entry) => {
      if (entry.isVisible) {
        spans.forEach((item) => {
          item.classList.remove("active");
          item.dataset.activity === entry.target.dataset.activity
            ? item.classList.add("active")
            : null;
        });
      }
    });
  };
  var observer = new IntersectionObserver(callback, options);
  observer.observe(target);
};
items.forEach((item) => {
  intersection(item);
});
