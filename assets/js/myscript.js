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