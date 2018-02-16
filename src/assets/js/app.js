import $ from 'jquery';
import whatInput from 'what-input';

window.$ = $;

import Foundation from 'foundation-sites';
// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';


$(document).foundation();

$('.header-menu__item').on('click', function (event) {
    if ($(event.currentTarget).hasClass('header-menu__item')) {
        let $menu = $(this);
        let $submenu = $(this).find('.header-menu__submenu');
        let isVisible = $submenu.hasClass('visible');

        $('.header-menu .visible').removeClass('visible');

        if (!isVisible) {
            $submenu.addClass('visible');
            $menu.addClass('visible');
        }

        $('body').toggleClass('is-menu-open');

        return true;
    } else {
        return false;
    }
});

$('body').on('click', function (event) {
    if (!$(event.target).hasClass('header-menu__item') &&
        !$(event.target).parent().hasClass('header-menu__item')
    ) {
        $('.header-menu .visible').removeClass('visible');
        $('body').removeClass('is-menu-open');
    }
});


$('.js-icon-search').click(function() {
   $('.js-hide-for-search').toggle();
   $('.js-search').toggle();
});
