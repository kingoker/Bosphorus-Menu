// Меню бургер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.header__body');
const menuItem = document.querySelectorAll('.sidebar__link');

if(iconMenu){
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('active');
        menuBody.classList.toggle('active');
    });
    menuItem.forEach(item => {
        item.addEventListener('click', event => {
            document.body.classList.remove('lock');
            iconMenu.classList.remove('active');
            menuBody.classList.remove('active');
        })
    })
}


// Изменение аквтивного пункта меню
var menu = document.getElementById('header__list');
var links = menu.getElementsByClassName('sidebar__link');

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', setActiveLink);
}

function setActiveLink(event) {
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('sidebar__link-active');
    }

    event.target.classList.add('sidebar__link-active');
}




// Плавный скрол к якорным ссылкам
var links = document.querySelectorAll('a[href^="#"]');

function handleLinkClick(event) {
    event.preventDefault();

    var targetId = this.getAttribute('href').slice(1);
    var targetElement = document.getElementById(targetId);
    
    if (targetElement) {
        var offset = targetElement.getBoundingClientRect().top - 100;
        
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
        });
    }
}

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', handleLinkClick);
}
