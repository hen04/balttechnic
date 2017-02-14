$(function(){

	var height = $(window).height();
	$(window).resize(function() {
		var height = $(window).height();
		$('.right-pic, .right-pic-bg').css('height', height);
	});
	$('.right-pic, .right-pic-bg').css('height', height);

	$('.info__img-text').hide();
	$('.info__item').on('click', function(){
		if ( $(this).hasClass('open') ) {
			$('.info__img-text').slideUp();
			$('.info__item').removeClass('open');
		} else {
			$('.info__img-text').slideUp();
			$('.info__item').removeClass('open');
			$(this).find('.info__img-text').slideDown();
			$(this).addClass('open');
			var img_left = $(this).data('img-left'), 
					img_right = $(this).data('img-right');
			$('.left-pic').css('background-image', 'url('+img_left+')');
			$('.right-pic-bg').css('background-image', 'url('+img_right+')');
		}
	});

	$('.top-btn').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});



});
