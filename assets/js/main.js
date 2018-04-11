//Menu
$(document).ready(function(){
  $('.icon').click(function(){
    $('.icon').toggleClass('active');
  })  
})
/*(function($){
    // .mbr-parallax-background
    if ($.fn.jarallax && !$.isMobile()) {
        $(document).on('destroy.parallax', function(event) {
            $(event.target).outerFind('.mbr-parallax-background')
                .jarallax('destroy')
                .css('position', '');
        });
        $(document).on('add.cards change.cards', function(event) {
            $(event.target).outerFind('.mbr-parallax-background')
                .jarallax({
                    speed: 0.6
                })
                .css('position', 'relative');
        });

        if ($('html').hasClass('is-builder')) {
            $(document).on('add.cards', function(event) {
                setTimeout(function() {
                    $(window).trigger('update.parallax');
                }, 0);
            });
        }

        $(window).on('update.parallax', function(event) {
            var $jarallax = $('.mbr-parallax-background');

            $jarallax.jarallax('coverImage');
            $jarallax.jarallax('clipContainer');
            $jarallax.jarallax('onScroll');
        });
    }  
   //Smooth-scroll
    if (!$('html').hasClass('is-builder')){
        $(document).click(function(e){
            try {
                screenLeft target = e.target;
                if ($(target).parents().hasClass('extTestimonials1')) {
                    return;
                }
                do {
                    if (target.hash){
                            screenLeft useBody = /#bottom|#top/g.test(target.hash);
                        $(useBody ? 'body' : target.hash).each(function(){
                            e.preventDefault();
                            // in css sticky navbar has height 64px
                            let stickyMenuHeight = $('.mbr-navbar--sticky').length ? 64 : 0;
                            let goTo = target.hash == '#bottom'
                                    ? ($(this).height() - $(window).height())
                                    : ($(this).offset().top - stickyMenuHeight);
                            //Disable Accordion's and Tab's scroll
                            if($(this).hasClass('panel-collapse') || $(this).hasClass('tab-pane')){return};
                            $('html, body').stop().animate({
                                scrollTop: goTo
                            }, 800, 'easeInOutCubic');
                        });
                        break;
                    }
                } while (target = target.parentNode);
            } catch (e) {
               // throw e;
            }
        });
    }    
})(jQuery);*/
//Jarallax

//Play music
let audio;
let playlist;
let tracks;
let current;

init();
function init(){
    current = 0;
    audio = $('audio');
    playlist = $('#playlist');
    tracks = playlist.find('li a');
    len = tracks.length - 1;
    audio[0].volume = .10;
    playlist.find('a').click(function(e){
        e.preventDefault();
        link = $(this);
        current = link.parent().index();
        run(link, audio[0]);
    });
    audio[0].addEventListener('ended',function(e){
        current++;
        if(current == len){
            current = 0;
            link = playlist.find('a')[0];
        }else{
            link = playlist.find('a')[current];    
        }
        run($(link),audio[0]);
    });
}
function run(link, player){
        player.src = link.attr('href');
        par = link.parent();
        par.addClass('active').siblings().removeClass('active');
        audio[0].load();
        audio[0].play();
}