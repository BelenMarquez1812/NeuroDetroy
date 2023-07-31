
// Establecer la fecha y hora actual
const fechaActual = new Date('2023-05-29');

// Establecer la fecha y hora objetivo para el contador regresivo
const fechaObjetivo = new Date('2024-07-08');

function actualizarContador() {
  const ahora = new Date().getTime();
  const diferencia = fechaObjetivo - ahora;

  // Calcula los días, horas, minutos y segundos restantes
  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  // Formatea los valores para que siempre tengan dos dígitos
  const tiempoFormateado = `${agregarCeros(dias)}:${agregarCeros(horas)}:${agregarCeros(minutos)}:${agregarCeros(segundos)}`;

  // Actualiza el contenido del elemento HTML con el contador regresivo
  document.getElementById('contador').textContent = tiempoFormateado;
}

function agregarCeros(valor) {
  return valor < 10 ? '0' + valor : valor;
}

// Actualiza el contador cada segundo
setInterval(actualizarContador, 1000);
