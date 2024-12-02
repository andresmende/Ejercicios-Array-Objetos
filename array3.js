const ventas = [
    {producto: "rojo", categoria: "lapiceros", monto: 150},
    {producto: "cuadriculado", categoria: "cuadernos", monto: 200},
    {producto: "negro", categoria: "lapiceros", monto: 100},
    {producto: "con stikert", categoria: "cuadernos", monto: 300},
    {producto: "de linea", categoria: "cuadernos", monto: 180}
   ];
   const ventasPorCategoria = ventas.reduce((acc, venta) => {
    acc[venta.categoria] = (acc[venta.categoria] || 0) + venta.monto;
    return acc;
   }, {});
   console.log("Ventas por categoría:", ventasPorCategoria);   