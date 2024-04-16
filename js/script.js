// Dish popup
document.querySelectorAll('.menu__item').forEach(function(item) {
    const menuItemContent = item.querySelector('.menu__item_content');
    const popup = item.querySelector('.popup');

    menuItemContent.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке
        const computedStyle = window.getComputedStyle(popup);
        if (computedStyle.display === 'none') {
            closeAllPopups();
            popup.style.display = 'block';
        } else {
            popup.style.display = 'none';
        }
    });

    function closeAllPopups() {
        document.querySelectorAll('.popup').forEach(function(popup) {
            popup.style.display = 'none';
        });
    }
});



// Close Popup
document.querySelectorAll('.popup__close').forEach(function(closeButton) {
    closeButton.addEventListener('click', function() {
        const popup = this.closest('.popup');
        popup.style.display = 'none';
        document.body.style.overflow = 'auto'; // Возвращаем скроллинг фона
    });
});


// Don't scroll
document.querySelectorAll('.menu__item_content').forEach(function(menuItemContent) {
    menuItemContent.addEventListener('click', function(event) {
        const popup = this.nextElementSibling; // Получаем следующий элемент после .menu__item_content, который является .popup
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Отключаем скроллинг фона
        event.stopPropagation(); // Остановка всплытия события, чтобы не срабатывал обработчик события на документе
    });
});

// Close Popup when clicking outside
document.addEventListener('click', function(event) {
    const popups = document.querySelectorAll('.popup');
    const popupContents = document.querySelectorAll('.popup__content');
    let clickedInsidePopupContent = false;

    popupContents.forEach(function(popupContent) {
        if (popupContent.contains(event.target)) {
            clickedInsidePopupContent = true;
        }
    });

    if (!clickedInsidePopupContent) {
        popups.forEach(function(popup) {
            popup.style.display = 'none';
            document.body.style.overflow = 'auto'; // Возвращаем скроллинг фона
        });
    }
});










// Dish popup photos
var thumbs = document.querySelectorAll('.popup__photos_thumbs > a');
var big = document.querySelector('.popup__photos_main img');

for (var i = 0; i < thumbs.length; i++) {
    thumbs[i].addEventListener('click', function(e) {
        e.preventDefault();
        big.src = this.href;
    });
}
