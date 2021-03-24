// WINDOW VH

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);
// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});


// Menu Slide

var menuHideShow = $('.menu').hasClass('menu_show');

function desplazar (){
    $('.menu').toggleClass('menu_show');
$('.hamburger_div').toggleClass('hamburger_div-slide');
    $('#hambIconOne').toggleClass('hamburger_icon_one');
    $('#hambIconTwo').toggleClass('hamburger_icon_two');
    $('#hambIconThree').toggleClass('hamburger_icon_three');
    // $('.menuicon').toggleClass('menuicon-black');
}
$('.hamburger_div').on('click', function(e){
    desplazar();
    e.stopPropagation();
    menuHideShow = $('.menu').hasClass('menu_show');
    console.log(menuHideShow)
})

window.addEventListener('click', function(e){
    if (menuHideShow = true && e.target.className != 'menu menu_show') {
        $('.menu').removeClass('menu_show');
        $('.hamburger_div').removeClass('hamburger_div-slide');
        $('#hambIconOne').removeClass('hamburger_icon_one');
        $('#hambIconTwo').removeClass('hamburger_icon_two');
        $('#hambIconThree').removeClass('hamburger_icon_three');
        // $('.menuicon').removeClass('menuicon-black');
        // e.stopPropagation();
    }
    console.log(e.target)
})


// FAQ SHOW ANSWERS

let faqTitle = $('.faq-title');

faqTitle.on('click', function() {
    $(this).children('img').toggleClass('faq-title-img-rotate');
    $(this).siblings('.faq-answer').toggleClass('faq-answer-show');
})

var x = window.matchMedia("(min-width: 1000px)")

function myFunction(x) {
  if (x.matches) { // If media query matches

    let tabItem = $('.tab-item');
    let tabAttr = tabItem.attr('tab');

    $( document ).ready(function() {
        $('.tab-item').children('img:nth-child(1)').removeClass('tab-icon-show')
        $('.tab-item:nth-child(1)').children('img:nth-child(1)').addClass('tab-icon-show')
        $('.car-slide:nth-child(1)').addClass('car-slide-show')
        $('.tab-item:nth-child(1)').children('.tab-item-border').addClass('tab-item-border-color')
        $('.tab-item:nth-child(1)').children('.slide-icon-text').addClass('slide-icon-text-color')

    });

    tabItem.on('mouseenter', function(){
        let attr = $(this).attr('tab');

        tabItem.children('img').removeClass('tab-icon-show')
        $(this).children('img:nth-child(1)').addClass('tab-icon-show')
        $('.car-slide').removeClass('car-slide-show')
        $('.tab-slide-'+attr+'').addClass('car-slide-show')
        $('.tab-item-border').removeClass('tab-item-border-color')
        $(this).children('.tab-item-border').addClass('tab-item-border-color')
        $('.slide-icon-text').removeClass('slide-icon-text-color')
        $(this).children('.slide-icon-text').addClass('slide-icon-text-color')

    })

    // tabItem.on('mouseleave', function(){
    //     $(this).children('img:nth-child(1)').removeClass('tab-icon-show')
    // })

  }
}

myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

