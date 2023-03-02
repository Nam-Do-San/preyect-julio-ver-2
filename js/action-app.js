// SCRIP FOT SHOW HEADER

let header = document.getElementById('header');
let sale = document.getElementById('sale');

// scroll var 
const scroll_down = document.getElementById('scroll-down');

window.addEventListener( 'scroll' , function (params) {
    // if (prevY > window.scrollY){
    //     console.log('subiendo');
    //     // sale.classList.remove('hidden');
    //     // solo aplica bg-black en tamaños - md ipad
    //     // header.classList.remove('md:bg-black'); 
    // }else{
    //     console.log('bajando')
    //     sale.classList.add('hidden');
    //     header.classList.add('md:bg-black')
    // }

    // si scroll < 100 - mostrar sale
    if (window.scrollY < 100) {
        sale.classList.remove('hidden');
        header.classList.remove('md:bg-custom-primary'); 
    }
    else{
        sale.classList.add('hidden');
        header.classList.add('md:bg-custom-primary');
    }

    // ADD show scroll
    if (window.scrollY > 1000) {
        scroll_down.classList.remove('hidden');
    }
    else{
        scroll_down.classList.add('hidden');
    }
})


// SCRIP FOT SHOW MENU AND SUBMENU

const btn_menu = document.getElementById('btn-menu');
let open = document.getElementById('open');
let close = document.getElementById('close');

const menu_nav = document.getElementById('menu-nav');

btn_menu.addEventListener('click', function (params) {
    open.classList.toggle('hidden');
    menu_nav.classList.toggle('hidden');

    close.classList.toggle('hidden');
    menu_nav.classList.toggle('block');
})



// 
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}