const socket = io();
console.log('hola desde el cliente');

socket.on('init-products', ({ products }) => {
  console.log(products);
  const main = document.getElementById('list-products');
  main.innerHTML = '';
  products.forEach((product) => {
    main.innerHTML += `<li id="${product.id}">` + product.title + '</li>';
  });
});

socket.on('delete-product', ({ id }) => {
  const product = document.getElementById(id);
  console.log(id);
  // product.remove();
});
