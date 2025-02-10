document.getElementById('loadMessage').addEventListener('click', function() {
    // Hacemos una petición al backend
    fetch('https://mi-proyecto.repl.co/api')  // Reemplaza con la URL de tu backend en Replit
        .then(response => response.json())
        .then(data => {
            document.getElementById('message').innerHTML = `<p>${data.message}</p>`;
        })
        .catch(error => {
            document.getElementById('message').innerHTML = `<p>Error al cargar el mensaje</p>`;
            console.error('Error:', error);
        });
});
