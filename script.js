const container = document.querySelector(".container");
const color1 = document.querySelector(".color-1");
const color2 = document.querySelector(".color-2");
const img1 = document.querySelector(".shoe1")

color2.addEventListener("click", () => {
    container.classList.add("change");
    img1.classList.toggle("d-none")
});

color1.addEventListener("click", () => {
    container.classList.remove("change");
    img1.classList.remove("d-none")
});

