$(function(){

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
			var img = $(this).data('img');
			$('body').css('background-image', 'url('+img+')');
		}
	});
	
	$('.top-btn').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});
});
