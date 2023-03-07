$(document).ready(function () {

    function resize()
            {
                var heights = window.innerHeight;
                document.getElementById("home-etc").style.height = heights + "px";
                $( "#home-etc" ).addClass( "home-loaded" );
            }
            resize();
            window.onresize = function() {
                resize();
                
            };


    
    $('.fill-link').click(function (event) {
        event.preventDefault();
        // $('.fill-link').fadeOut("slow");
        
    });
    
    $('#music-link').click(function (event) {
        event.preventDefault();
        $('body').addClass('music-fill');
        $('.music-panel').addClass('top');
        $('.music-carousel').slick({
            autoplay: false,
            dots: false,
            arrows: true,
            infinite: false,
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><svg id="a6715ff4-60c0-48b3-bf22-8c3f1ba5fe7d" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.63 44"><title>arrow_left_peach</title><path d="M35.83,72a.79.79,0,0,0,.76-.82.82.82,0,0,0-.22-.51L18.68,50.75H83.05a.79.79,0,1,0-.14-1.57H18.68L36.37,29.3a.79.79,0,1,0-1.17-1.06h0L16.35,49.45a.76.76,0,0,0,0,1L35.2,71.71A.78.78,0,0,0,35.83,72Z" transform="translate(-16.14 -27.98)" fill="#da8a6b"/></svg>Previous</button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><svg id="acd033f6-b0d2-4669-9e4f-fb64156d1216" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.11 56.02"><title>arrow_right</title><path d="M67.94,22a1,1,0,0,0-.69,1.69L89.78,49h-82A1,1,0,0,0,8,51H89.78L67.25,76.31a1,1,0,0,0,1.5,1.35h0l24-27a1,1,0,0,0,0-1.35l-24-27A1,1,0,0,0,67.94,22Z" transform="translate(-6.9 -21.97)"/></svg>Next</button>',
        });
    });
    $('#code-link').click(function (event) {
        event.preventDefault();
        $('body').addClass('code-fill');
        $('.code-panel').addClass('top');
        $('.code-carousel').slick({
            autoplay: false,
            dots: false,
            arrows: true,
            infinite: false,
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><svg id="a6715ff4-60c0-48b3-bf22-8c3f1ba5fe7d" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.63 44"><title>arrow_left_peach</title><path d="M35.83,72a.79.79,0,0,0,.76-.82.82.82,0,0,0-.22-.51L18.68,50.75H83.05a.79.79,0,1,0-.14-1.57H18.68L36.37,29.3a.79.79,0,1,0-1.17-1.06h0L16.35,49.45a.76.76,0,0,0,0,1L35.2,71.71A.78.78,0,0,0,35.83,72Z" transform="translate(-16.14 -27.98)" fill="#da8a6b"/></svg>Previous</button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><svg id="acd033f6-b0d2-4669-9e4f-fb64156d1216" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.11 56.02"><title>arrow_right</title><path d="M67.94,22a1,1,0,0,0-.69,1.69L89.78,49h-82A1,1,0,0,0,8,51H89.78L67.25,76.31a1,1,0,0,0,1.5,1.35h0l24-27a1,1,0,0,0,0-1.35l-24-27A1,1,0,0,0,67.94,22Z" transform="translate(-6.9 -21.97)"/></svg>Next</button>',
        });
    });
    $('#but-wait-music').click(function (event) {
        event.preventDefault();
        $('.code-panel').removeClass('top').fadeOut();
        $('.music-panel').addClass('top').fadeIn();
        $('body').removeClass('code-fill').addClass('music-fill');
        $('.music-carousel').slick({
            autoplay: false,
            dots: false,
            arrows: true,
            infinite: false,
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><svg id="a6715ff4-60c0-48b3-bf22-8c3f1ba5fe7d" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.63 44"><title>arrow_left_peach</title><path d="M35.83,72a.79.79,0,0,0,.76-.82.82.82,0,0,0-.22-.51L18.68,50.75H83.05a.79.79,0,1,0-.14-1.57H18.68L36.37,29.3a.79.79,0,1,0-1.17-1.06h0L16.35,49.45a.76.76,0,0,0,0,1L35.2,71.71A.78.78,0,0,0,35.83,72Z" transform="translate(-16.14 -27.98)" fill="#da8a6b"/></svg>Previous</button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><svg id="acd033f6-b0d2-4669-9e4f-fb64156d1216" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.11 56.02"><title>arrow_right</title><path d="M67.94,22a1,1,0,0,0-.69,1.69L89.78,49h-82A1,1,0,0,0,8,51H89.78L67.25,76.31a1,1,0,0,0,1.5,1.35h0l24-27a1,1,0,0,0,0-1.35l-24-27A1,1,0,0,0,67.94,22Z" transform="translate(-6.9 -21.97)"/></svg>Next</button>',
        });
    });
    $('#but-wait-code').click(function (event) {
        event.preventDefault();
        $('.music-panel').removeClass('top').fadeOut();
        $('.code-panel').addClass('top').fadeIn();
        $('body').removeClass('music-fill').addClass('code-fill');
        $('.code-carousel').slick({
            autoplay: false,
            dots: false,
            arrows: true,
            infinite: false,
            prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><svg id="a6715ff4-60c0-48b3-bf22-8c3f1ba5fe7d" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 67.63 44"><title>arrow_left_peach</title><path d="M35.83,72a.79.79,0,0,0,.76-.82.82.82,0,0,0-.22-.51L18.68,50.75H83.05a.79.79,0,1,0-.14-1.57H18.68L36.37,29.3a.79.79,0,1,0-1.17-1.06h0L16.35,49.45a.76.76,0,0,0,0,1L35.2,71.71A.78.78,0,0,0,35.83,72Z" transform="translate(-16.14 -27.98)" fill="#da8a6b"/></svg>Previous</button>',
            nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><svg id="acd033f6-b0d2-4669-9e4f-fb64156d1216" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 86.11 56.02"><title>arrow_right</title><path d="M67.94,22a1,1,0,0,0-.69,1.69L89.78,49h-82A1,1,0,0,0,8,51H89.78L67.25,76.31a1,1,0,0,0,1.5,1.35h0l24-27a1,1,0,0,0,0-1.35l-24-27A1,1,0,0,0,67.94,22Z" transform="translate(-6.9 -21.97)"/></svg>Next</button>',
        });
    });
    
});

if(window.location.href.indexOf("#music") > -1) {
    document.getElementById('music-link').click();
    console.log('URL');
}