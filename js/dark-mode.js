let btn_swap_theme = document.getElementById('btn-swap-theme')
// iconos de button
const icon_sun = document.getElementById('sun');
const icon_moon = document.getElementById('moon');

// scrit html or js
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    
} else {
    document.documentElement.classList.remove('dark')
}
// end scrip previously


// button  swap theme 

btn_swap_theme.addEventListener('click', function (params) {
    console.log('hola')

    // los iconos cambian entre si por el tog
    icon_moon.classList.toggle('hidden');
    icon_sun.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }

})