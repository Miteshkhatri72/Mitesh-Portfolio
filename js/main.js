$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 1) {
           $('nav').addClass('add-nav');
        } else {
           $('nav').removeClass('add-nav');
        }
    });
    
    $('.nav-link').click(function(){
      $('.nav-link').removeClass('nav-active');
      $(this).addClass('nav-active');
    });

    $('.nav-link').on('click', function(e) {
      e.preventDefault(); // prevent hard jump, the default behavior

      var target = $(this).attr("href"); // Set the target as variable

      // perform animated scrolling by getting top-position of target-element and set it as scroll target
      $('html, body').stop().animate({
          scrollTop: $(target).offset().top
      }, 600, function() {
          location.hash = target; //attach the hash (#jumptarget) to the pageurl
      });

      return false;
  });


      // init Isotope after all images have loaded
     var $grid = $('.grid').isotope({
     itemSelector: '.grid-item',
     masonry: {
     horizontalOrder: false,
     verticalOrder: true,
     }
     });
 

  // filter items on button click
  $('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  $('.port-btn').click(function(){
    $('.port-btn').removeClass('is-checked');
    $(this).addClass('is-checked');
  });

})

$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop() + 200;

  // Assign active class to nav links while scolling
  $('.scroll').each(function(i) {
      if ($(this).position().top <= scrollDistance) {
          $('.nav-link.nav-active').removeClass('nav-active');
          $('.nav-link').eq(i).addClass('nav-active');
      }
  });
}).scroll();



var $animation_elements = $('.starting');
var $window = $(window);

function check_if_in_view() {
	var window_height = $window.height();
	var window_top_position = $window.scrollTop() +500;
	var window_bottom_position = (window_top_position + window_height);

	$.each($animation_elements, function() {
		var $element = $(this);
		var element_height = $element.outerHeight();
		var element_top_position = $element.offset().top + 800;
		var element_bottom_position = (element_top_position + element_height);

		//check to see if this current container is within viewport
		if ((element_bottom_position >= window_top_position) &&
			(element_top_position <= window_bottom_position)) {
		  $element.addClass('in-view');
		} else {
		  $element.removeClass('in-view');
		}
	});
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll', check_if_in_view);


// click to see full img
var modalBox = document.querySelector('.modal-box'),
    modalBoxImg = modalBox.querySelector('.modal-box-image'),
    overlay  = document.querySelector('.overlay'),
    imageBox = document.querySelectorAll('.grid-item'),
    modalImgBox = modalBoxImg.querySelector('img');



for (let i = 0; i < imageBox.length; i++) {
    imageBox[i].onclick = function () {
        modalBox.classList.remove('invisible');
        var imgSrc = this.querySelector('.thumbnail').src;
        modalImgBox.src = imgSrc;
        
    }
}

overlay.onclick = function () {
    modalBox.classList.add('invisible');
}
window.onkeydown = function (e) {
    if (e.keyCode === 27){
        modalBox.classList.add('invisible');

    }
}

          const toggle = document.querySelector("#toggler");
          const checkbtn = document.querySelector("#toggler-btn");
          const main = document.querySelector("#nav-bar");
          const navlink = document.querySelector(".nav-item")

          document.onclick = function(e){
            if(e.target.id !== 'nav-bar' && e.target.id !== 'toggler-btn'){
              checkbtn.classList.remove('active')
              main.classList.remove('show')
            }
          };
          navlink.onclick = function(e){
            if(e.target.class !== 'nav-item'){
              checkbtn.classList.remove('active')
              main.classList.remove('show')
            }
          };
          toggle.onclick = function(){
            checkbtn.classList.toggle('active')
          }

$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(550).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(550).css({'overflow':'visible'});
})




































