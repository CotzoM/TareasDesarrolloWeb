function cambiarFondo() {
    // Cambia el color de fondo aleatoriamente
    const colores = ["#f4f4f4ff", "#c90898ff", "#470dceff", "#ccccff", "#af8d26ff"];
    document.body.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
}

function mostrarAlerta() {
    alert("Hola, soy Mike Cotzojay y estudio Computación.");
}

// Validación del formulario
document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    alert("Formulario enviado correctamente ✅");
});
