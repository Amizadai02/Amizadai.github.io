const carrito = [];
const carritoElement = document.getElementById('carrito');
const totalElement = document.getElementById('total');

document.querySelectorAll('.agregar-carrito').forEach(button => {
  button.addEventListener('click', () => {
    const nombre = button.getAttribute('data-nombre');
    const precio = parseFloat(button.getAttribute('data-precio'));
    agregarAlCarrito(nombre, precio);
  });
});

function agregarAlCarrito(producto, precio) {
  carrito.push({ producto, precio });
  actualizarCarrito();
}

function actualizarCarrito() {
  carritoElement.innerHTML = '';
  let total = 0;

  carrito.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.producto} - $${item.precio}`;
    carritoElement.appendChild(listItem);
    total += item.precio;
  });

  totalElement.textContent = total;
}
