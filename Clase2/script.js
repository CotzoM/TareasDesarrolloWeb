

// Función para mostrar la bienvenida
function mostrarBienvenida() {
    const saludo = "🌎 ¡Hola! Prepárate para descubrir maravillas en Guatemala 🇬🇹";
    let listaLugares = "✨ Lugares que no te puedes perder:\n Aquí algunos de los destinos más populares:\n";
    


    // Mostrar el mensaje de bienvenida
    alert(`${saludo}\n\n${listaLugares}`);
}

// Llamar a la función al cargar la página
window.onload = mostrarBienvenida;
