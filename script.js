// Открытие модального окна с изображением
function openModal(imageSrc) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    modal.style.display = "flex";
    modalImg.src = imageSrc;
}

// Закрытие модального окна
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Закрытие при клике вне изображения
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        closeModal();
    }
}

document.getElementById('contactForm').addEventListener('submit', function() {
    // Показать сообщение только если форма отправлена успешно
    document.getElementById('responseMessage').style.display = 'block';
});

// Получаем кнопку
let mybutton = document.getElementById("scrollToTopBtn");

// Показываем кнопку при прокрутке
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};

// Функция прокрутки наверх
mybutton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
