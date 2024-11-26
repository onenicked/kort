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
