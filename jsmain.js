// Ejemplo: animar items al cargar
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll('.menu-item');
  items.forEach((item, i) => {
    setTimeout(() => item.classList.add('visible'), i * 100);
  });
});
