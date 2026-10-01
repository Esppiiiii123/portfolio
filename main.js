// ==========================================
// PARTE A — Comprobación de integración
// ==========================================
console.log("Portfolio JS cargado ✅");


// ==========================================
// PARTE B — Lógica del Modo Oscuro
// ==========================================
// 1. Seleccionamos el botón de cambio de tema mediante su ID único
const botonTema = document.getElementById("toggle-tema");

// 2. RETO EXTRA: Comprobamos si el usuario ya tenía una preferencia guardada en localStorage
const temaGuardado = localStorage.getItem("tema");

if (temaGuardado === "dark") {
  // Si guardó 'dark', aplicamos la clase al <body> inmediatamente al cargar
  document.body.classList.add("dark");
  botonTema.textContent = "☀️ Modo claro";
}

// 3. Añadimos el escuchador de eventos al hacer clic en el botón
botonTema.addEventListener("click", () => {
  // .classList.toggle() añade la clase 'dark' si no existe, o la quita si ya existe
  document.body.classList.toggle("dark");

  // Comprobamos si el body tiene la clase 'dark' activa tras el toggle
  const esModoOscuro = document.body.classList.contains("dark");

  if (esModoOscuro) {
    botonTema.textContent = "☀️ Modo claro";
    // Guardamos la preferencia en el navegador
    localStorage.setItem("tema", "dark");
  } else {
    botonTema.textContent = "🌙 Modo oscuro";
    // Guardamos la preferencia en el navegador
    localStorage.setItem("tema", "light");
  }
});


// ==========================================
// PARTE C — Lógica del Menú Móvil Hamburguesa
// ==========================================
// 1. Seleccionamos el botón hamburguesa y el nav principal
const botonMenu = document.getElementById("toggle-menu");
const menu = document.getElementById("menu-principal");

// 2. Evento clic para desplegar u ocultar el menú
botonMenu.addEventListener("click", () => {
  // Alterna la clase .abierto en el nav (definida en el CSS)
  menu.classList.toggle("abierto");
});


// ==========================================
// PARTE D — Cerrar menú al pulsar un enlace
// ==========================================
// 1. querySelectorAll devuelve una lista (NodeList) con TODOS los enlaces <a> dentro del menú
const enlacesMenu = document.querySelectorAll("#menu-principal a");

// 2. Recorremos la lista de enlaces uno a uno mediante .forEach()
enlacesMenu.forEach((enlace) => {
  // Asignamos un escuchador de evento a cada enlace individualmente
  enlace.addEventListener("click", () => {
    // Al hacer clic en cualquier sección del menú, eliminamos la clase .abierto para cerrarlo
    menu.classList.remove("abierto");
  });
});