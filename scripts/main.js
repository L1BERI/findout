


  const myAtropos = Atropos({
    el: '.my-atropos',
    shadow: false,
    alwaysActive: true,
  });

  const myAtroposs = Atropos({
    el: '.my-atroposs',
    shadow: false,
    alwaysActive: true,
  });
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if(entry.isIntersecting){
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    })
  })
  
  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach((el) => observer.observe(el));
  
$(function () {


  $('.message-btn').on('click', function (e) {
    e.preventDefault();
    if (!($('.message').hasClass('message-close'))) {
      $('.message').addClass('message-close');
    }
  })

  $('.content-cards__link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('accor-list__link--active')) {
      $(this).removeClass('accor-list__link--active')
    } else {
      $(this).toggleClass('accor-list__link--active')
    }
    $(this).children('.content-cards__bottom').slideToggle()
  })

  $(".top-nav__list a").on("click", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 1000);
  })


  var owl = $('.owl-carousel');
  owl.owlCarousel({
    loop: true,
    items: 3,
    margin: 265,
    responsive: {
      0: {
        items: 1,
        margin: 65
      },
      768: {
        items: 2,
        margin: 0
      },
      1280: {
        items: 3
      }
    }

  });
  // Go to the next item
  $('.slider__arrow-next').click(function (e) {
    e.preventDefault();
    owl.trigger('next.owl.carousel');
  })
  // Go to the previous item
  $('.slider__arrow-prev').click(function (e) {
    e.preventDefault();
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
  })



  $(document).ready(function () {
    $('.customers__slider').slick({
      arrows: false,
      slidesToShow: 1
    });
  });


  $('.customers__arrow-next').on('click', function (e) {
    e.preventDefault()
    $('.customers__slider').slick('slickNext')
  })
  $('.customers__arrow-prev').on('click', function (e) {
    e.preventDefault()
    $('.customers__slider').slick('slickPrev')
  })



  $(".rating").rateYo({
    rating: 3.6,
    readOnly: true,
    spacing: '6px',
    starWidth: "13px",

  });



  $('.burger').on('click', function (e) {
    e.preventDefault();
    if ($('.burger').hasClass('burger--active')) {
      $('.burger').removeClass('burger--active')
      $('.overlay').removeClass('overlay--visible')
      $('.header__top').removeClass('header__top--active')
    } else {
      $('.burger').toggleClass('burger--active')
      $('.overlay').toggleClass('overlay--visible')
      $('.header__top').toggleClass('header__top--active')
    }
  })

  setInterval(() => {
    if ($('.overlay').hasClass('overlay--visible')) {
      $('body').css('overflow', 'hidden')
    } else {
      $('body').css('overflow', 'visible')
    }
  }, 0);



  $('.overlay, .header__top-nav').on('click', function (e) {
    e.preventDefault()
    if ($('.burger').hasClass('burger--active')) {
      $('.burger').toggleClass('burger--active')
      $('.header__top').toggleClass('header__top--active')
      $('.overlay').toggleClass('overlay--visible')
    }
  })
})





