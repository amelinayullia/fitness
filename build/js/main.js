var subscriptionLinks = document.querySelectorAll(".subscription__time a");
var subscriptionBlocks = document.querySelectorAll(".subscription__about-tab");
var form = document.querySelector('.wrapper__form-inner form');
var nameInput = document.querySelector('#input-name');
var phoneInput = document.querySelector('#input-phone');
var numInputsRegEx = /[^\d,+,\-,()]/g;

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

var checkInputValidity = function(input) {
  if (input.value) {
    return true;
  }
  input.classList.add('error');
  return false;
}
var onInputChangeHandler = function(e) {
  if (e.target.classList.contains('error')) {
    e.target.classList.remove('error');
  }
}
var onPhoneInputChangeHandler = function(e) {
  e.target.value = e.target.value.replace(numInputsRegEx, '');
}
var onFormSubmitHandler = function (e) {
  e.preventDefault();
  checkInputValidity(nameInput);
  checkInputValidity(phoneInput);
  if (checkInputValidity(nameInput) && checkInputValidity(phoneInput)) {
    form.reset();
  }
}
if (form) {
  form.noValidate = true;
  form.addEventListener('submit', onFormSubmitHandler);
  phoneInput.addEventListener('input', onInputChangeHandler);
  phoneInput.addEventListener('input', onPhoneInputChangeHandler);
  nameInput.addEventListener('input', onInputChangeHandler);
}
