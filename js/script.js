var swiper = new Swiper(".brands .mySwiper", {
    slidesPerView: 5,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        575: {
            slidesPerView: 2,
            spaceBetween: 20,
          }, 
        767: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1399: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
  });


  var swiper = new Swiper(".order .mySwiper", {
    slidesPerView: 3.5,
    centeredSlides: true,
    spaceBetween: 20,
    loop: true,
    keyboard: {
      enabled: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        767: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1199: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
  });

  var swiper = new Swiper(".shipping .mySwiper", {
    slidesPerView: 3,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
        767: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1199: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
  });