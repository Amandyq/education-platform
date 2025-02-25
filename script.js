document.addEventListener("DOMContentLoaded", function () {
    console.log("Сайт жүктелді!");

    // Батырмаларды басқанда хабарлама шығару
    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Батырма басылды!");
        });
    });

    // Форманы жібергенде хабарлама шығару
    let form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            alert("Форма сәтті жіберілді!");
        });
    }
});
