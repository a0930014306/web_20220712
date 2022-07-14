const $slidels = $('#SlideLs')
const isMobile = $(window).width() <= 480
const $nav = $('#Nav')

console.log(isMobile);

$('#Btn1').addClass('js-nav-btn')

$('#Btn1').click(function () {
    if ($(this).hasClass('js-nav-btn')) {
        return
    }
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn')
    $slidels.css({
        left: '0',
        top: '0'
    })
    if(isMobile){
        $nav.removeClass('js-nav')
    }

})
$('#Btn2').click(function () {
    if ($(this).hasClass('js-nav-btn')) {
        return
    }
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn')
    $slidels.css({
        left: '-100vw',
        top: '0'
    })
    if(isMobile){
        $nav.removeClass('js-nav')
    }
})
$('#Btn3').click(function () {
    if ($(this).hasClass('js-nav-btn')) {
        return
    }
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn')
    $slidels.css({
        left: '-200vw',
        top: '0'
    })
    if(isMobile){
        $nav.removeClass('js-nav')
    }
})
$('#Btn4').click(function () {
    if ($(this).hasClass('js-nav-btn')) {
        return
    }
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn')
    $slidels.css({
        left: '0',
        top: '-100vh'
    })
    if(isMobile){
        $nav.removeClass('js-nav')
    }
})
$('#Btn5').click(function () {
    if ($(this).hasClass('js-nav-btn')) {
        return
    }
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn')
    $slidels.css({
        left: '-100vw',
        top: '-100vh'
    })
    if(isMobile){
        $nav.removeClass('js-nav')
    }
})
$('#Btn6').click(function () {
    if ($(this).hasClass('js-nav-btn')) {
        return
    }
    $(this).addClass('js-nav-btn').siblings().removeClass('js-nav-btn')
    $slidels.css({
        left: '-200vw',
        top: '-100vh'
    })
    if(isMobile){
        $nav.removeClass('js-nav')
    }
})

if (isMobile) {
    $slidels.find('.slide-item').scroll(function () {
        if ($(this).scrollTop() == 0) {
           $nav.removeClass('js-nav')
        } else {
           $nav.addClass('js-nav')
        }
    })
}

$('.pd-item > a').fancybox({
    protect:true
})