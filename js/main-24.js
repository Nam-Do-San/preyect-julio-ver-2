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
        header.classList.remove('bg-main-black'); 
        header.classList.remove('border-b-2')
    }
    else{
        sale.classList.add('hidden');
        header.classList.add('bg-main-black');
        header.classList.add('border-b-2')
        
    }

    // ADD show scroll
    if (window.scrollY > 1000) {
        scroll_down.classList.remove('hidden');
    }
    else{
        scroll_down.classList.add('hidden');
    }
})




///

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    const btn_whatsapp = document.getElementById("btn-whatsapp");

    if (document.documentElement.scrollTop > 150) {
        btn_whatsapp.style.display = "block";
        scrollToTopBtn.style.display = "block";
    } else {
        btn_whatsapp.style.display = "none";
        scrollToTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    document.documentElement.scrollTop = 0;
}