const menu_opener = document.querySelector('.menu-opener');


menu_opener.addEventListener('click', ()=> {
    const menu = document.querySelector('.menu');
    console.log( menu.style.display)
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
})