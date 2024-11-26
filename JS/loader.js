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