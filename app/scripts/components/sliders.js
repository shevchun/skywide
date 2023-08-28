// import $ from 'jquery';
// import 'slick-carousel';

// export default () => {

//   if ($('.review-slider__list').length) {
//     $('.review-slider__list').each((i, element) => {
//       const allItems = $(element).find('.review-slider__item').length
//       $(element).parents('.review-slider').find('.counter-all').text(allItems < 10 ? `0${allItems}` : allItems)
//       $(element).parents('.review-slider').find('.counter-progress-line').css('width', `${100 / allItems}%`)

//       $(element).slick({
//         infinite: false,
//         slidesToShow: 1,
//         prevArrow: '<span class="slick-prev"><svg width="41" height="13" viewBox="0 0 41 13" xmlns="http://www.w3.org/2000/svg"><path d="M0.469669 5.95844C0.176777 6.25133 0.176777 6.7262 0.469669 7.0191L5.24264 11.7921C5.53553 12.085 6.01041 12.085 6.3033 11.7921C6.59619 11.4992 6.59619 11.0243 6.3033 10.7314L2.06066 6.48877L6.3033 2.24613C6.5962 1.95323 6.5962 1.47836 6.3033 1.18547C6.01041 0.892572 5.53553 0.892572 5.24264 1.18547L0.469669 5.95844ZM41 5.73877L1 5.73877L1 7.23877L41 7.23877L41 5.73877Z" /></svg></span>',
//         nextArrow: '<span class="slick-next"><svg width="41" height="13" viewBox="0 0 41 13" xmlns="http://www.w3.org/2000/svg"><path d="M0.469669 5.95844C0.176777 6.25133 0.176777 6.7262 0.469669 7.0191L5.24264 11.7921C5.53553 12.085 6.01041 12.085 6.3033 11.7921C6.59619 11.4992 6.59619 11.0243 6.3033 10.7314L2.06066 6.48877L6.3033 2.24613C6.5962 1.95323 6.5962 1.47836 6.3033 1.18547C6.01041 0.892572 5.53553 0.892572 5.24264 1.18547L0.469669 5.95844ZM41 5.73877L1 5.73877L1 7.23877L41 7.23877L41 5.73877Z" /></svg></span>',
//         appendArrows: $(element).parents('.review-slider').find('.review-slider__arrows'),
//       });

//       $(element).on('beforeChange', (event, slick, currentSlide, nextSlide) => {
//         $(element).parents('.review-slider').find('.counter-current').text((nextSlide + 1) < 10 ? `0${(nextSlide + 1)}` : (nextSlide + 1))
//         $(element).parents('.review-slider').find('.counter-progress-line').css('width', `${100 / allItems * (nextSlide + 1)}%`)
//       });

//     })
//   }

// }