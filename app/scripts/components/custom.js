import $ from 'jquery'

export default () => {

  if ($(window).width() < 1200) {
    $('.header__menu-nav-link').on('click', function dropMenuFunc() {
      $(this).parents('.header__menu-nav-item').toggleClass('active')
      return false
    })
  }


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

  if ($('.article__aside').length) {
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

        const headerHeight = $(window).width() < 1200 ? 82 : 110;
        const targetScrollPosition = targetOffsetTop - headerHeight;
        window.scrollTo({ top: targetScrollPosition, behavior: 'smooth' });
      });
    });
  }

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
    $('.header__menu-nav-item').removeClass('active')
  })

}