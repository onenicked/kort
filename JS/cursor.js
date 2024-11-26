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
