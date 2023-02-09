var btn_dark = document.getElementById('btn-dark');

btn_dark.onclick = touch;

function touch(params) {
    console.log('addstyle');
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        console.log('adddark');
      } else {
        document.documentElement.classList.toggle('dark')
        console.log('renove');
      }
}


