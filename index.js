$(document).ready(function()
{
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
    var typed = new Typed(".typing",{
        strings:["Software Developer","Data analyst","BI analyst"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    })
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeout:200,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }

    });
})