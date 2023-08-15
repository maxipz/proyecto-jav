//document.addEventListener("DOMContentLoaded", function() {
  //  const form = document.querySelector("form");
  //
    //form.addEventListener("submit", function(event) {
      //event.preventDefault();
  
      //const username = document.getElementById("username").value;
      //const password = document.getElementById("password").value;
  
      //if (username.trim() === "" || password.trim() === "") {
        //alert("Por favor, completa todos los campos.");
      //} else {
       // window.location.href = "index.html"; 
      //}
    //});
  //});
  document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      if (username.trim() === "" || password.trim() === "") {
        alert("Por favor, completa todos los campos.");
      } else {
        // Simulación de autenticación exitosa
        const autenticacionExitosa = true;
  
        if (autenticacionExitosa) {
          localStorage.setItem("username", username);
          localStorage.setItem("isLoggedIn", true);
  
          window.location.href = "index.html"; // Redirige a la página principal después del inicio de sesión
        } else {
          alert("Credenciales incorrectas. Por favor, intenta de nuevo.");
        }
      }
    });
  });
  