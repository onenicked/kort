document.addEventListener("DOMContentLoaded", () => {
    // Ждём окончания анимации прелоадера
    setTimeout(() => {
        const loader = document.getElementById("loader");
        const content = document.getElementById("content");
        
        // Скрываем прелоадер и показываем контент
        loader.style.display = "none";
        content.classList.remove("hidden");
        content.classList.add("show");
    }, 2000); // Задержка в 2 секунды
});

// Создаём элемент кастомного курсора
const cursor = document.createElement("div");
cursor.classList.add("custom-cursor");
document.body.appendChild(cursor);

// Обновляем положение курсора при движении мыши
document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX}px`; // Координаты относительно окна
    cursor.style.top = `${e.clientY}px`; // Координаты относительно окна
});

// Реагируем на элементы, такие как ссылки (увеличиваем круг)
document.querySelectorAll("a, button").forEach((element) => {
    element.addEventListener("mouseenter", () => cursor.classList.add("hover"));
    element.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
});

// Инициализация карты
ymaps.ready(initMap);

function initMap() {
    const location1 = [52.622659, 39.570177]; // Первая метка: Гагарина 97
    const location2 = [52.588861, 39.620258]; // Вторая метка: Зои Космодемьянской 2Б
    const location3 = [52.598654, 39.569739]; // Вторая метка: Проспект Победы, 21

    // Создание карты
    const map = new ymaps.Map("map", {
        center: location1, // Центрируем на первой локации
        zoom: 12, // Зум для отображения обеих меток
        controls: ['zoomControl', 'geolocationControl'], // Элементы управления
    });

    // Первая метка
    const placemark1 = new ymaps.Placemark(location1, {
        hintContent: "Объект на Гагарина",
        balloonContent: "",
    }, {
        preset: 'islands#blackDotIcon', // Вид метки
    });

    // Вторая метка
    const placemark2 = new ymaps.Placemark(location2, {
        hintContent: "Объект на Зои Космодемьянской",
        balloonContent: "",
    }, {
        preset: 'islands#blackDotIcon', // Вид метки
    });

    // Третья метка
    const placemark3 = new ymaps.Placemark(location3, {
        hintContent: "Объект на Зои Космодемьянской",
        balloonContent: "",
    }, {
        preset: 'islands#blackDotIcon', // Вид метки
    });

    // Добавляем метки на карту
    map.geoObjects.add(placemark1);
    map.geoObjects.add(placemark2);
    map.geoObjects.add(placemark3);
}


let slideIndex = 0;

    // Функция для переключения слайдов
    function showSlides() {
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");
        
        // Скрываем все слайды
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        
        // Убираем активное состояние у всех точек
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        // Показать текущий слайд
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }

        // Показываем текущий слайд
        slides[slideIndex - 1].style.display = "block";

        // Активируем соответствующую точку
        dots[slideIndex - 1].className += " active";

        // Снова показываем слайды через 3 секунды
        setTimeout(showSlides, 3000); 
    }

    // Инициализация слайдшоу
    showSlides();
