const display = document.getElementById("pantalla");
const botones = document.querySelectorAll("button");

botones.forEach(boton => {
    boton.addEventListener("click", () => {

        const valor = boton.textContent;

        if (valor === "AC") {
            display.value = "";
        }
        else if (valor === "DEL") {
            display.value = display.value.slice(0, -1);
        }
        else if (valor === "=") {
            display.value = eval(display.value);
        } 
        else {
            display.value += valor;
        }

    });
});