// JavaScript Document

$(function(){

	'use strict';

	var scrollSpeed = 1000, // スクロール時間（ミリ秒）
			buttonOffset = 200; // トップへ戻る固定ボタンを表示するスクロール量（px）

	// スムーズスクロール
	$('a[href^=#]').on( 'click', function() {
		var href= $(this).attr( 'href' );
		if ( href !== '#' || href !== '' ) {
			var target = ( href === '#top' && !$('#top').length ) ? 'html' : href,
					position = $(target).offset().top;
			$('body, html').animate( {scrollTop:position}, scrollSpeed, 'swing' );
			return false;
		}
	});
	// トップへ戻る固定ボタンの表示・非表示
	if ( $('.scroll-fade').length ) {
		var sfBtn = $('.scroll-fade'),
				sfBtnDisplay = '',
				flagAnimate = false;
		$(sfBtn).css( 'display', 'none' );
		$(window).on( 'scroll', function() {
			sfBtnDisplay = sfBtn.css( 'display' );
			if ( $(this).scrollTop() > buttonOffset && sfBtnDisplay === 'none' && !flagAnimate ) {
				flagAnimate = true;
				sfBtn.fadeIn(function() {
					flagAnimate = false;
				});
			} else if ( $(this).scrollTop() <= buttonOffset && sfBtnDisplay !== 'none' && !flagAnimate )  {
				flagAnimate = true;
				sfBtn.fadeOut(function() {
					flagAnimate = false;
				});
			}
		});
	}

});
