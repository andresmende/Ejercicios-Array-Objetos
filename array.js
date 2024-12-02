const tienda = [
    {nombre: "arroz", precio: 400, cantidad: 8},
    {nombre: "papa", precio: 200, cantidad: 2},
    {nombre: "azucar", precio: 100, cantidad: 2},
    {nombre: "leche", precio: 150, cantidad: 3},
    {nombre: "sal", precio: 75, cantidad: 2}
   ];
   // Función para calcular total
   const calcularTotal = (productos) => {
    return productos.reduce((total, producto) => {
    const subtotal = producto.precio * producto.cantidad;
    return total + subtotal;
    }, 0);
   };
   // Calcular y mostrar resultado
   const total = calcularTotal(tienda);
   console.log("Productos en carrito:", tienda);
   console.log("Total a pagar: $" + total);
   