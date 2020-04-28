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
    selectedAttraction: 1,
    friction: 1,
    draggable: false,
    prevNextButtons: false,
    pageDots: false
})

var $carousel = $('.slider-main').flickity();

  $('.navpic').on( 'click', function() {
    var index = $(this).index();
    $carousel.flickity( 'select', index );
  });

$('.slider-cust').flickity ({
    contain: true,
    cellAlign: 'left',
    draggable: false,
    prevNextButtons: true,
    pageDots: false
})

$('.slider-related-items').flickity ({
    contain: true,
    cellAlign: 'left',
    pageDots: false,
    selectedAttraction: 0.13,
    friction: 0.8
})

$('.accordion').click(function(e){
      var $this = $(this),
      $parent = $this.parent('.info').find('.panel');

      $parent.slideToggle('1000','swing');
      var $icon = $this.find('.fas');
      if ($icon.hasClass('hidden')) {
            $icon.toggleClass('hidden');
      } else {
            $icon.toggleClass('hidden');
      }
  console.log($this);
  console.log($parent);

})

$('.quantity-input').click(function(e){
      var $this = $(this),
      $parent = $this.parent('.quantity-wrap').find('.q-choices');
      $child = $parent.find('.num')
      $parent.toggleClass('invisible');
      $parent.toggleClass('w-0');
      $parent.toggleClass('w-48');
      $child.toggleClass('w-0');
      $child.toggleClass('w-12');
      $child.toggleClass('opacity-0');
      $child.toggleClass('opacity-100');
      // $parent.animate({width: '12rem'});

})
