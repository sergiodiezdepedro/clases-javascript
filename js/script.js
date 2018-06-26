/*jshint esversion: 6 */

let clases = ['defecto', 'ubuntu', 'source', 'montserrat', 'open', 'lora', 'titillium', 'fade-in'];

const elemento = document.getElementById('contenedor');
const header = document.getElementById('header');
let links = header.getElementsByClassName('enlace');

function cambiar(trigger) {
  let clase = trigger.target;
  for (n = 0; n < clases.length; n++) {
    elemento.classList.remove(clases[n]);
  }
  elemento.classList.add(`${clase.id}`);
  // La clase 'fade-in' añade simplemente un efecto suave de entrada, definido por una animacion CSS
  // Se retira, con una pausa marcada por 'timeOut', para que el efecto se repita al presionar otro desencadenador del evento.
  elemento.classList.add('fade-in');
  setTimeout(() => (elemento.classList.remove('fade-in')), 1000);
}

// Función para añadir la clase 'active' al pulsar el enlace correspondiente
for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function() {
    let actual = document.getElementsByClassName("active");
    actual[0].className = actual[0].className.replace(" active", "");
    this.className += " active";
  });
}

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', cambiar);
}
