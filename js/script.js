var toggle = document.querySelector(".navig__toggle");
var navig = document.querySelector(".navig");

toggle.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (navig.classList.contains("navig--closed")) {
        navig.classList.remove("navig--closed");
        navig.classList.add("navig--opened");
    } else {
        navig.classList.remove("navig--opened");
        navig.classList.add("navig--closed");
    }
});