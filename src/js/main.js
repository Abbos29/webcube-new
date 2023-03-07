// Custom scripts

// Scroll animation
AOS.init();

/*
TODO 1) Фиксированная кнопка до секции social networks
TODO 2) После 1 экрана при скролле вверх показывать шапку сайта
TODO 3) Валидация модального окна
TODO 4) Отправка данных на почту 
*/

// Мобильное меню бургер
function burgerMenu() {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");
  burger.addEventListener("click", () => {
    if (!menu.classList.contains("active")) {
      menu.classList.add("active");
      burger.classList.add("active-burger");
      body.classList.add("locked");
    } else {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });
  menu.addEventListener("click", (event) => {
    if (event.target) {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener("resize", () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove("active");
      burger.classList.remove("active-burger");
      body.classList.remove("locked");
    }
  });
}
burgerMenu();

// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.

// SWIPER

const swiper = new Swiper(".swiper", {
  // Optional parameters
  // direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 50,
  autoHeight: true,
  loop: true,
  grabCursor: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      // autoHeight: true,
      slidesPerView: 1,
      spaceBetween: 20,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      // navigation: false,
    },
    992: {
      slidesPerView: 1,
    },
  },
});

// // Открытие попапа для фиксированной кнопки
// function popupOpen() {
//   const popup = document.querySelector(".modal");
//   const popupClose = document.querySelector(".modal__close");
//   const fixedBtn = document.querySelector(".start-btn");

//   fixedBtn.addEventListener("click", () => {
//     if (!popup.classList.contains("modal__show")) {
//       popup.classList.add("modal__show");
//     } else {
//       popup.classList.remove("modal__show");
//     }
//   });

//   popupClose.addEventListener("click", () => {
//     popup.classList.remove("modal__show");
//   });
// }
// popupOpen();

// // Модальное окно заказа

// const modalBtn = document.getElementById("modal-btn");
// const modal = document.getElementById("modal");
// const overlay = document.querySelector(".overlay");

// modalBtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   modal.style.display = "block";
//   modal.style.right = "0";
//   overlay.style.display = "block";
//   overlay.style.zIndex = "10";
// });

// overlay.addEventListener("click", () => {
//   modal.style.display = "none";
//   overlay.style.display = "none";
// });

// // Зкакрытие открытого меню на мобилке при скролле

// $(document).ready(function () {
//   let prevScrollpos = window.pageYOffset;
//   $(window).scroll(function (event) {
//     lastScrollpos = window.pageYOffset;
//     if (
//       lastScrollpos > prevScrollpos + 30 ||
//       lastScrollpos < prevScrollpos - 30
//     );
//     {
//       $(".header").removeClass("active");
//       prevScrollpos = window.pageYOffset;
//     }
//   });
// });

// Фиксированная кнопка на мобилке
if (matchMedia("screen and (max-width: 1023px)").matches) {
  $(window).scroll(function () {
    var offset = $("#student-offset").offset();
    var welcomeArea = $(".information").offset();

    if (
      $(this).scrollTop() > offset.top ||
      $(this).scrollTop() <= welcomeArea.top
    ) {
      // console.log("hidden");
      $(".button_fixed").css({
        visibility: "hidden",
        opacity: "0",
      });
    } else {
      // console.log("visible");
      $(".button_fixed").css({
        visibility: "visible",
        opacity: "1",
      });
    }
  });
}


// Header fixed

const header = document.querySelector("[data-js-header]");
const headerScrolledClass =
  header.getAttribute("data-js-header-scrolled") || "";
const headerOpenedClass = header.getAttribute("data-js-header-opened") || "";
const headerToggle = document.querySelector("[data-js-header-toggle]");
const headerToggleActiveClass =
  headerToggle.getAttribute("data-js-header-toggle-active") || "";

function animationHeader(item, currentPosition) {
  if (!item) {
    return;
  }
  currentPosition > 96
    ? item.classList.add(headerScrolledClass)
    : item.classList.remove(headerScrolledClass);
}

animationHeader(
  header,
  window.pageYOffset || document.documentElement.scrollTop
);

window.addEventListener("scroll", function () {
  const scrolled = window.pageYOffset || document.documentElement.scrollTop;
  animationHeader(header, scrolled);
});

headerToggle &&
  header &&
  (headerToggle.onclick = (e) => {
    header.classList.toggle(headerOpenedClass);
    e.target.classList.toggle(headerToggleActiveClass);
  });



// Убрать кнопку .start-btn когда доскроллил до секции .form
