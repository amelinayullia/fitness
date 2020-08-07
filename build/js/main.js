var subscriptionLinks = document.querySelectorAll(".subscription__time a");
var subscriptionBlocks = document.querySelectorAll(".subscription__about-tab");

var hideLinksActiveClass = function () {
  Array.prototype.forEach.call(subscriptionLinks, function (link) {
    link.classList.remove("active");
  });
};

var hideBlocks = function () {
  Array.prototype.forEach.call(subscriptionBlocks, function (block) {
    block.classList.remove("active");
  });
};

if (subscriptionLinks.length) {
  Array.prototype.forEach.call(subscriptionLinks, function (link, index) {
    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      hideLinksActiveClass();
      hideBlocks();
      link.classList.add("active");
      subscriptionBlocks[index].classList.add("active");
    });
  });
}

var trainerSlider = new Swiper(".trainers__inner", {
  breakpoints: {
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
  navigation: {
    nextEl: ".trainers__button-next",
    prevEl: ".trainers__button-previous",
  },
});

var reviewsSliders = new Swiper('.reviews__block', {
  navigation: {
    nextEl: ".reviews__button-next",
    prevEl: ".reviews__button-previous",
  },
})
