const btn = document.getElementById("btn");
const shapes = [
    "quad-circle-1",
    "quad-circle-2",
    "quad-circle-3",
    "quad-circle-4",
    "triangle-3",
    "circle"
];

const colors = ["#fcba03", "#81f0e1", "#d10f7a", "#ffffff"];
const boxes = document.querySelectorAll(".container div");

let GeneratePattern = () => {
    boxes.forEach((box) => {
        box.className = "";
        let i = Math.floor(Math.random() * shapes.length);
        box.classList.add(shapes[i]);
        box.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    });
};

btn.addEventListener("click", GeneratePattern);
window.addEventListener("load", GeneratePattern)