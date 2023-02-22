let header = document.getElementById('header');
let sale = document.getElementById('sale');

let prevY = window.scrollY;

window.addEventListener( 'scroll' , function (params) {
    if (prevY > window.scrollY){
        console.log('subiendo');
        sale.classList.remove('hidden');
        // solo aplica bg-black en tamaños - md ipad
        header.classList.remove('md:bg-black'); 
    }else{
        console.log('bajando')
        sale.classList.add('hidden');
        header.classList.add('md:bg-black')
    }
    prevY = window.scrollY;
})














let btn_menu = document.getElementById('btn-menu');
let open = document.getElementById('open');
let close = document.getElementById('close');

const menu_nav = document.getElementById('menu-nav');

btn_menu.addEventListener('click', function (params) {
    console.log('ddd')
    open.classList.toggle('hidden');
    menu_nav.classList.toggle('hidden');

    close.classList.toggle('hidden');
    menu_nav.classList.toggle('block');
})