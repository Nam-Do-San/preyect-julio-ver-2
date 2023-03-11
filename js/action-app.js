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




// new accordio

const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
    let header = item.querySelector(".faq");
    header.addEventListener("click", () =>{
        item.classList.toggle("open");

        let description = item.querySelector(".description");
        if(item.classList.contains("open")){
            description.style.height = `${description.scrollHeight}px`; //scrollHeight property returns the height of an element including padding , but excluding borders, scrollbar or margin
            item.querySelector("i").classList.replace("bx-plus", "bx-minus");
        }else{
            description.style.height = "0px";
            item.querySelector("i").classList.replace("bx-minus", "bx-plus");
        }
        removeOpen(index); //calling the funtion and also passing the index number of the clicked header
    })
})

function removeOpen(index1){
    accordionContent.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("open");

            let des = item2.querySelector(".description");
            des.style.height = "0px";
            item2.querySelector("i").classList.replace("bx-minus", "bx-plus");
        }
    })
}