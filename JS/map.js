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