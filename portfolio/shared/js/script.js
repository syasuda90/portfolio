$(function() {
  'use strict'

  // 共通関数
  var $siteWidth     = $('body').width(),
      $pcWidth       = 641,
      $switchProfile = $('.js-switch-profile'),
      $switchWorks   = $('.js-switch-works'),
      $profile       = $('.js-profile'),
      $works         = $('.js-works'),
      $headerMenu    = $('.js-header-menu'),
      $active        = $('.is-active'),
       activeClass   =  ('is-active'),
       disabledClass =  ('is-disabled');

  // SP用 header menu
  $headerMenu.on('click', function() {
    if ($(this).hasClass(activeClass)){
      $(this).removeClass(activeClass);
      $(this).next().removeClass(activeClass);
    } else {
      $(this).addClass(activeClass);
      $(this).next().addClass(activeClass);
    }
  });

  // profile menu 表示切り替え
  $switchProfile.on('click', function(event) {

    // click 無効化
    event.preventDefault();

    $headerMenu.removeClass(activeClass);
    $headerMenu.next().removeClass(activeClass);
    $works.fadeOut(200,0, function() {
      $works.addClass(disabledClass);
      $profile.removeClass(disabledClass);
      $profile.fadeTo(200,1);
    });
  });

  // works menu 表示切り替え
  $switchWorks.on('click', function(event) {

    // click 無効化
    event.preventDefault();

    $headerMenu.removeClass(activeClass);
    $headerMenu.next().removeClass(activeClass);
    $profile.fadeOut(200,0, function() {
      $profile.addClass(disabledClass);
      $works.removeClass(disabledClass);
      $works.fadeTo(200,1);
    });
  });
});