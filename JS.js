let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
nav: true,
autoplay: true,
autoplayTimeout:10000,
        margin: 15,
        loop: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
          }
}
    });
});

function myfunc(){
    $('.back-to-top').click(function () {
        $('body,html').animate({ scrollTop: 0}, 20); 
    });
    
    $(window).scroll(function() { 
        let scrolled = $(window).scrollTop(); 
    
        if(scrolled > 500) { 
            $('.back-to-top').addClass('active');
        } else {
            $('.back-to-top').removeClass('active');
        }
    });
};

function Frstclick() {

    swal(
        'Ваш лист було надісланно!',
        'Надішлемо відповідь, як тільки зможемо!',
        'success'
      )

}

