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
  pageDots: true
})

$(document).ready(function(){
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

    });

    $('.quantity-input').click(getInput);

    function getInput(){
            var $qChoices = $('.quantity-input').parent('.quantity-wrap').find('.q-choices');
            $qChoicesNum = $qChoices.find('.num');
            $qChoices.toggleClass('invisible');
            $('.quantity-input').toggleClass('b-right-0');
            $qChoices.toggleClass('w-0');
            $qChoices.toggleClass('w-48');
            $qChoicesNum.toggleClass('w-0');
            $qChoicesNum.toggleClass('w-12');
            $qChoicesNum.toggleClass('opacity-0');
            $qChoicesNum.toggleClass('opacity-100');
            // $parent.animate({width: '12rem'});
            // console.log($this).val();
      };

    $(".num").click(function(e) {
        // var text = $(this).text(); 
        $(".quantity-input .q-val").html($(this).text());
        getInput();
        // console.log($(this).text());
    });

    $('.size-choice').click(function(e){
        $('.prod-size .size-text').html($(this).text());
    });



    })

   
