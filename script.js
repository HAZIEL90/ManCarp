document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;

    if (nombre && email) {
        alert("Gracias, " + nombre + ". Tu mensaje ha sido enviado.");
        document.getElementById("contactForm").reset();
    } else {
        alert("Por favor, completa todos los campos.");
    }
});