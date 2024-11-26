document.addEventListener("DOMContentLoaded", () => {
    // Ждём окончания анимации прелоадера
    setTimeout(() => {
        const loader = document.getElementById("loader");
        const content = document.getElementById("content");
        
        // Скрываем прелоадер и показываем контент
        loader.style.display = "none";
        content.classList.remove("hidden");
        content.classList.add("show");
    }, 200); // Задержка в 200 милисекунд
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
        let slides = document.querySelectorAll('.slides');

        // Функция для показа слайдов
        function showSlide(index) {
            if (index >= slides.length) slideIndex = 0;
            if (index < 0) slideIndex = slides.length - 1;

            slides.forEach((slide, i) => {
                slide.style.display = i === slideIndex ? 'block' : 'none';
            });
        }

        // Навигация по слайдам
        document.querySelectorAll('.next').forEach((button, index) => {
            button.addEventListener('click', () => {
                slideIndex++;
                showSlide(slideIndex);
            });
        });

        document.querySelectorAll('.prev').forEach((button, index) => {
            button.addEventListener('click', () => {
                slideIndex--;
                showSlide(slideIndex);
            });
        });

        // Инициализация первого слайда
        showSlide(slideIndex);

/*Страница оплаты*/
function updateOptions() {
    const paymentMethod = document.getElementById('payment-method').value;
    const secondarySelectContainer = document.getElementById('secondary-select-container');
    const addCardSection = document.getElementById('add-card-section');

    // При выборе "Не выбрано" скрываем все дополнительные поля
    if (paymentMethod === 'none') {
      secondarySelectContainer.classList.add('hidden');
      addCardSection.classList.remove('visible');
    } else if (paymentMethod === 'card' || paymentMethod === 'paypal') {
      // Скрываем выбор "Банк / Кошелек" для "Банковская карта" и "PayPal"
      secondarySelectContainer.classList.add('hidden');
      // Показываем секцию добавления карты для "Банковская карта"
      if (paymentMethod === 'card'|| paymentMethod === 'paypal') {
        addCardSection.classList.add('visible');
      } else {
        addCardSection.classList.remove('visible');
      }
    } else {
      // Показываем выбор "Банк / Кошелек" для других методов
      secondarySelectContainer.classList.remove('hidden');
      addCardSection.classList.remove('visible');

      // Если выбран "Криптовалюта", меняем варианты на кошельки
      if (paymentMethod === 'crypto') {
        const secondarySelect = document.getElementById('secondary-select');
        secondarySelect.innerHTML = `
          <option value="bitcoin">Bitcoin</option>
          <option value="ethereum">Ethereum</option>
          <option value="litecoin">Litecoin</option>
          <option value="ripple">Ripple</option>
        `;
      } else {
        // Восстанавливаем стандартные банки для других методов оплаты
        const secondarySelect = document.getElementById('secondary-select');
        secondarySelect.innerHTML = `
          <option value="sberbank">Сбербанк</option>
          <option value="tinkoff">Тинькофф</option>
          <option value="vtb">ВТБ</option>
          <option value="alfa">Альфа-Банк</option>
        `;
      }
    }
  }
