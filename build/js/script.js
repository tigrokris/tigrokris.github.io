const toggle = document.querySelector(".navig__toggle");
const navig = document.querySelector(".navig");
const frame = document.querySelector(".hotel-search_frame");
const map = document.querySelector(".hotel-search__map-wraper");

toggle.addEventListener("click", function (evt) {
    evt.preventDefault();
    // if (navig.classList.contains("navig--closed")) {
    //     navig.classList.remove("navig--closed");
    //     navig.classList.add("navig--opened");
    // } else {
    //     navig.classList.remove("navig--opened");
    //     navig.classList.add("navig--closed");
    // }
    navig.classList.toggle("navig--opened");
    navig.classList.toggle("navig--closed");
});
map.addEventListener("click",function (evt) {
    evt.preventDefault();
    frame.classList.remove("visually-hidden");
    document.querySelector(".hotel-search__map").classList.add("visually-hidden");
    document.querySelector(".hotel-search__map-marker").classList.add("visually-hidden");
});