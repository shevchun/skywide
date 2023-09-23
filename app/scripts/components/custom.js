import $ from 'jquery'

export default () => {

  if ($('.article__aside').length) {
    $('.wrapper').addClass('wrapper--ovv')
  }

  $('.resources__head').on('click', function resourcesFunc() {
    $(this).siblings('.resources__body').slideToggle()
    $(this).parents('.resources').toggleClass('active')
  })

  $('.faq__head').on('click', function resourcesFunc() {
    $(this).siblings('.faq__item-body').slideToggle()
    $(this).parents('.faq__item').toggleClass('active')
  })

  const navigationLinks = document.querySelectorAll('.article__nav a');
  const sidebarMenu = document.querySelector('.article__aside');
  
  function isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  window.addEventListener('scroll', () => {
    navigationLinks.forEach(link => {
      const targetSectionId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetSectionId);

      if (isElementVisible(targetSection)) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
    const sidebarMenuRect = sidebarMenu.getBoundingClientRect();
    if (sidebarMenuRect.top < 0 || sidebarMenuRect.bottom > window.innerHeight) {
      sidebarMenu.classList.add('hidden');
    } else {
      sidebarMenu.classList.remove('hidden');
    }
  });

  navigationLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const targetSectionId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetSectionId);

      const targetOffsetTop = targetSection.getBoundingClientRect().top + window.pageYOffset;

      const headerHeight = 110;
      const targetScrollPosition = targetOffsetTop - headerHeight;
      window.scrollTo({ top: targetScrollPosition, behavior: 'smooth' });
    });
  });

  const counters = document.querySelectorAll('.js-count')

  counters.forEach(counter => {
    const targetValue = parseInt(counter.getAttribute('data-count'))
    let currentValue = 0
    const increment = Math.ceil(targetValue / 200)

    const updateCounter = () => {
      if (currentValue < targetValue) {
        currentValue += increment
        if (currentValue > targetValue) {
          currentValue = targetValue
        }
        counter.textContent = new Intl.NumberFormat('en-US').format(currentValue)
        requestAnimationFrame(updateCounter)
      }
    }

    updateCounter()
  })

  $('.js-open-menu').on('click', () => {
    $('.header').addClass('open-menu')
  })
  $('.js-close-menu').on('click', () => {
    $('.header').removeClass('open-menu')
  })

  // $('.header__mobile-menu').on('click', () => {
  //   $('.header__mobile').addClass('active')
  //   setTimeout(() => {
  //     $('.header__mobile-box').addClass('active')
  //   }, 300)
  // })

  // $('.header__mobile-overlay').on('click', () => {
  //   $('.header__mobile-box').removeClass('active')
  //   setTimeout(() => {
  //     $('.header__mobile').removeClass('active')
  //   }, 300)
  // })

  //   $('.lang__current').on('click', function lang(event) {
  //     event.stopPropagation()
  //     $(this).parents('.lang').toggleClass('active')
  //   })

  //   $(document).on("click", (event) => {
  //     event.stopPropagation()
  //     if ($(event.target).closest(".lang__list").length) return
  //     $('.lang').removeClass('active')
  //   })

  //   function isFloat(value) {
  //     return typeof value === 'number' &&
  //       !Number.isNaN(value) &&
  //       !Number.isInteger(value)
  //   }

  //   $('[data-rate]').each((index, element) => {
  //     let val = $(element).attr('data-rate')
  //     if (!isFloat(val)) {
  //       val = parseFloat(val).toFixed(1)
  //     }
  //     const full = val.split('.')[0] || null
  //     const fraction = val.split('.')[1] || null
  //     $(element).find($('.rate__item-holder-inner')).each((i, item) => {
  //       if (i <= +full) {
  //         $(item).addClass('active')
  //       }
  //       if (i === +full) {
  //         $(item).addClass('active').css('width', `${fraction}0%`)
  //       }
  //     })
  //   })

  //   $(window).on('scroll', function scrollPage() {
  //     const heightWindow = 50
  //     if ($(this).scrollTop() >= heightWindow) {
  //       $('.header').addClass('header--scroll')
  //     } else {
  //       $('.header').removeClass('header--scroll')
  //     }
  //   })

  //   $('.table-content__list a').on('click', function clickDownScroll() {
  //     const marginTop = 110
  //     const scrollEl = $(this).attr('href')
  //     if ($(scrollEl).length !== 0) {
  //       $('html, body').animate(
  //         {
  //           scrollTop: $(scrollEl).offset().top - marginTop,
  //         },
  //         500
  //       )
  //     }
  //     return false
  //   })

  //   $('.js-scroll-top').on('click', () => {
  //     $('html, body').animate({
  //       scrollTop: 0
  //     }, 500)
  //   })
}