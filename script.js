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

/*музыка*/
document.addEventListener("DOMContentLoaded", function () {
    const music = document.getElementById("backgroundMusic");
    const musicToggle = document.getElementById("musicToggle");

    const songs = [
        "/music/Running In The Night feat. Ollie Wride Album OUT NOW.mp3",
        "/music/Bend & Break (feat. Ollie Wride).mp3",
        "/music/morgan wallen - im the problem (ricky retro remix).mp3"
    ];
    let currentSongIndex = 0;
    let pausedTime = 0; // Переменная для хранения текущего времени при паузе

    // Функция для воспроизведения текущей песни с сохраненной позиции
    function playSong() {
        music.src = songs[currentSongIndex];
        music.currentTime = pausedTime; // Устанавливаем сохраненное время
        music.play();
        musicToggle.textContent = "🔇 Stop Music";
    }

    // Обработчик для кнопки
    musicToggle.addEventListener("click", function () {
        if (music.paused) {
            playSong();
        } else {
            pausedTime = music.currentTime; // Сохраняем время перед паузой
            music.pause();
            musicToggle.textContent = "🎵 Play Music";
        }
    });

    // Событие окончания текущей песни
    music.addEventListener("ended", function () {
        currentSongIndex = (currentSongIndex + 1) % songs.length;  // Переход к следующей песне
        pausedTime = 0; // Сбрасываем позицию при переходе к новой песне
        playSong();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const headerTab = document.getElementById("header-tab");

    let lastScrollY = window.scrollY;
    let isMobile = window.innerWidth <= 767;
    let hiddenHeight = isMobile ? -250 : -100; // Определяем, насколько прятать хедер

    function checkScroll() {
        if (window.scrollY > lastScrollY) {
            // Прокрутка вниз – прячем хедер
            header.style.top = hiddenHeight + "px";
            headerTab.style.display = "block";
        } else {
            // Прокрутка вверх – показываем хедер
            header.style.top = "0";
            headerTab.style.display = "none";
        }
        lastScrollY = window.scrollY;
    }

    window.addEventListener("scroll", function () {
        checkScroll();
    });

    headerTab.addEventListener("click", function () {
        header.style.top = "0";
        headerTab.style.display = "none";
    });

    window.addEventListener("resize", function () {
        isMobile = window.innerWidth <= 767;
        hiddenHeight = isMobile ? -250 : -100;
    });
});

