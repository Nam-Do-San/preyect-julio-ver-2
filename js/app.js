const header = document.getElementById('header');
const head_bot = document.getElementById('head-bot');
let prevY = window.scrollY;


const scroll_down = document.getElementById('scroll-down');


window.addEventListener('scroll', function () {


  if (window.scrollY > 1) {
    header.classList.add('bg-neutral-800');

    head_bot.classList.add('bg-neutral-900');
  } else {
    header.classList.remove('bg-neutral-800');
    head_bot.classList.remove('bg-neutral-900');
  }
  // prevY = window.scrollY;
  // console.log(prevY = window.scrollY);


  // scroll down to up 
  if (window.scrollY > 1500) {
    scroll_down.classList.remove('hidden');
  }
  else{
    scroll_down.classList.add('hidden');
  }
});




// button navbar --- se puede mejorar el code
let btn_nav = document.getElementById('btn-nav');
btn_nav.onclick = alert;


function alert(params) {
  let menu_drop = document.getElementById('menu-drop')
  console.log('click');
  header.classList.add('bg-neutral-900')
  header.classList.remove('bg-neutral-900')

  menu_drop.classList.toggle('hidden');
  menu_drop.classList.toggle('block')

}



// swap teme
const swap_theme = document.getElementById('swap-theme');


function aletswap(params) {

  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    console.log('adddark');
  } else {
    document.documentElement.classList.toggle('dark')
    console.log('renove');
  }

  localStorage.theme = 'light'

  // Whenever the user explicitly chooses dark mode
  localStorage.theme = 'dark'

  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem('theme')


}




