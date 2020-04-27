// $('.slider-for').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     speed: 100,
//     asNavFor: '.slider-nav'
// });
// $('.slider-nav').slick({
//     infinite: false,
//     asNavFor: '.slider-for',
//     slidesToShow: 7,
//     focusOnSelect: true,
//     vertical: true
// }); 

$('.slider-main').flickity ({
    contain: true,
    draggable: false,
    prevNextButtons: false,
    pageDots: false
})

var $carousel = $('.slider-main').flickity();

  $('.thumbnail').on( 'click', '.navpic', function() {
    var index = $(this).index();
    $carousel.flickity( 'select', index );
  });

  $('.slider-related-items').flickity ({
    contain: true,
    cellAlign: 'left',
    pageDots: false,
    selectedAttraction: 0.13,
    friction: 0.8
})
