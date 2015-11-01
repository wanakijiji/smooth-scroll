// JavaScript Document

$(function(){

	// スムーズスクロール
	$('a[href^=#]').on('click', function() {
		var speed = 1000; // スクロール時間（ミリ秒）
		var href= $(this).attr('href');
		var target = $((href == '#top' && !$('#top').length) || href == '#' || href == '' ? 'html' : href);
		var position = target.offset().top;
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});

});
