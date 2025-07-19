


const swiper = new Swiper('#sec-slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 50,
    centerSlider: true,
  
    // If we need pagination
    pagination: {
      el: '.sec-swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.sec-swiper-button-next',
      prevEl: '.sec-swiper-button-prev',
    },
  

  
  });