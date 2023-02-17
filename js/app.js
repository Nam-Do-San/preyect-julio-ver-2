const header = document.getElementById('header');
const head_bot = document.getElementById('head-bot');
let prevY = window.scrollY;

// scroll var 
const scroll_down = document.getElementById('scroll-down');

window.addEventListener('scroll', function () {
  if (window.scrollY > 1) {
    header.classList.add('md:bg-custom-secondary');
    head_bot.classList.add('bg-custom-primary');
  } else {
    header.classList.remove('md:bg-custom-secondary');
    head_bot.classList.remove('bg-custom-primary');
  }
  // prevY = window.scrollY;
  console.log(prevY = window.scrollY);




  // scroll down to up 
  if (window.scrollY > 1500) {
    scroll_down.classList.remove('hidden');
  }
  else{
    scroll_down.classList.add('hidden');
  }
});




// button navbar --- se puede mejorar el code
let btn_menu = document.getElementById('btn-menu');
let btn_open = document.getElementById('btn-open');
let btn_close = document.getElementById('btn-close');


btn_menu.addEventListener('click', function (params) {
  let menu_drop = document.getElementById('menu-drop')
  console.log('click2');

  btn_open.classList.toggle('hidden');
  btn_close.classList.toggle('hidden');

  header.classList.add('bg-neutral-900')
  header.classList.remove('bg-neutral-900')

  menu_drop.classList.toggle('hidden');
  menu_drop.classList.toggle('block')

})
