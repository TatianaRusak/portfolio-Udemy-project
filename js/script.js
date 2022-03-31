const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => menu.classList.add('active'));
closeElem.addEventListener('click', () => menu.classList.remove('active'));

const percents = document.querySelectorAll('.skills__ratings-percent'),
    bars = document.querySelectorAll('.skills__ratings-bar span');
      
percents.forEach((item, i) => { 
    bars[i].style.width = item.innerHTML;
})