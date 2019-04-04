$(function(){
    'use strict';
    $('.classic-list li').click(function (){
        $(this).addClass('active').siblings('li').removeClass('active');
        $('.content div').hide();
        $('.'+$(this).data('class')).fadeIn();
    })
});
