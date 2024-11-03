// $(document).ready(function () {
//     var cardWidth = $(".card").outerWidth(); // Получаем ширину карточки

//     $('.new__buttons button:nth-child(2)').click(function () {
//         var firstChildAppend = $(".cards__carusel .card:first");
//         $(".cards__carusel").animate({ left: -cardWidth }, function () {
//             $(this).append(firstChildAppend); // Добавляем первый элемент в конец
//             $(this).css({ left: 0 }); // Сбрасываем положение
//         });
//     });
    
//     $('.new__buttons button:nth-child(1)').click(function () {
//         var lastChildPrepend = $(".cards__carusel .card:last");
//         $(".cards__carusel").animate({ left: cardWidth }, function () {
//             $(this).prepend(lastChildPrepend); // Добавляем последний элемент в начало
//             $(this).css({ left: 0 }); // Сбрасываем положение
// $(document).ready(function () {
//     // Получаем ширину одной карточки
//     let cardWidth = $(".card").outerWidth(true);
    
//     // Обработчик для кнопки "next"
//     $('.next').click(function () {
//         $(".cards__carusel").animate({ scrollLeft: '+=' + cardWidth }, 300);
//     });

//     // Обработчик для кнопки "previous"
//     $('.previous').click(function () {
//         $(".cards__carusel").animate({ scrollLeft: '-=' + cardWidth }, 300);
//     });
// });  ЗБС



// $(document).ready(function () {
//     // Получаем ширину одной карточки
//     let cardWidth = $(".card").outerWidth(true);

//     // Обработчик для кнопки "next"
//     $('.next').click(function () {
//         let container = $(".cards__carusel");

//         // Перемещаем первую карточку в конец перед началом анимации
//         container.append(container.find(".card").first());
//         container.scrollLeft(container.scrollLeft() - cardWidth);

//         // Выполняем анимацию
//         container.animate({ scrollLeft: '+=' + cardWidth }, 300);
//     });

//     // Обработчик для кнопки "previous"
//     $('.previous').click(function () {
//         let container = $(".cards__carusel");

//         if (container.scrollLeft() === 0) {
//             // Перемещаем последнюю карточку в начало перед началом анимации
//             container.prepend(container.find(".card").last());
//             container.scrollLeft(container.scrollLeft() + cardWidth);
//         }

//         // Выполняем анимацию
//         container.animate({ scrollLeft: '-=' + cardWidth }, 300);
//     });
// }); СУПЕР АХУЕННО 


$(document).ready(function () {
    // Получаем ширину одной карточки
    let cardWidth = $(".card").outerWidth(true);

    // Обработчик для кнопки "next"
    $('.next').click(function () {
        let container = $(".cards__carusel");

        // Анимация сдвига влево
        container.animate({ scrollLeft: '+=' + cardWidth }, 300, function () {
            // После завершения анимации перемещаем первую карточку в конец
            container.append(container.find(".card").first());
            // Сбрасываем scrollLeft для плавного перехода
            container.scrollLeft(container.scrollLeft() - cardWidth);
        });
    });

    // Обработчик для кнопки "previous"
    $('.previous').click(function () {
        let container = $(".cards__carusel");

        if (container.scrollLeft() === 0) {
            // Перемещаем последнюю карточку в начало перед анимацией
            container.prepend(container.find(".card").last());
            // Устанавливаем scrollLeft так, чтобы карточка плавно вошла в видимую область
            container.scrollLeft(container.scrollLeft() + cardWidth);
        }

        // Анимация сдвига вправо
        container.animate({ scrollLeft: '-=' + cardWidth }, 300);
    });
});
