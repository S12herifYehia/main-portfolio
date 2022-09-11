
// Start scroll
$(document).ready(function(){

    $(window).scroll(function(){
        if(window.scrollY>20){
         $('#home').addClass('sticky')
         $('span').removeClass('lio')
        }else{
            $('#home').removeClass('sticky')
            $('span').addClass('lio')
        }
        if(window.scrollY > 500){
            $('.angle-up-btn').addClass('show')
        }else{
            $('.angle-up-show').removeClass('show')
        }

    })

    $('.menu-toggle').click(function(){
        $('.navbar').toggleClass('active')
        $('.menu-toggle i').toggleClass('active')
    })

    $('.angle-up-btn').click(function(){
        $('html').animate({scrollTop:0})
    })



// End scroll

var typed= new Typed('.typing',{
    strings:['Developer'],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})

var types=new Typed('.typing-2',{
    strings:['Developer'],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})


// Skills 

// اللي هو عايزه يتحرك انميت لحد مايوصل النسبه المطلوبه بتاعته
//  هاجي اقوله كل واحده من الاسكل بريسنت دي حركهالي

$('.skill-percent').each(function(){

    $('.skill-percent').animate({
        width:$('.skill-percent').attr('data-percent')
    })

})


// Teams
$('.carousel').owlCarousel({
    margin:20,
    loop:true,
    autoplay:true,
    autoplayTimeOut:1000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
        },
        735:{
            items:2
        },
        1000:{
            items:3,
        }

    }
})

})



