const mesas = [
    { numero: 1, tipo: 'dos personas', precio: 100, ocupada:
    false },
    { numero: 2, tipo: 'tres personas', precio: 150, ocupada: false },
{ numero: 3, tipo: 'mas de 4 personas', precio: 250, ocupada: false }
];
let reservas = [];
  
1// Función para hacer una reserva
 function reservarMesas(numeroMesas, residente,
fechaIngreso, fechaSalida) {
const mesa = mesas.find(m => m.numero === numeroMesas);
  
 if (!mesa) {
 return `La mesa ${numeroMesas} no
existe`;
}
if (mesa.ocupada) {
    return `La mesa ${numeroMesas} ya está
   ocupada`;
    }
     
    mesa.ocupada = true;
    
    const nuevaReserva = {
    id: reservas.length + 1,
   mesa: numeroMesas,
    residente,
    fechaIngreso,
    fechaSalida
    };
    
    reservas.push(nuevaReserva);
    return `Reserva confirmada para ${residente} en mesas
   ${numeroMesas}`;
}
  
// Función para ver habitaciones disponibles
 function verDisponibles() {
return mesas.filter(m => !m.ocupada);
}
  
function cancelarReserva(numeroMesas) {
 const mesa = mesas.find(m => m.numero === numeroMesas);
  
if (!mesa) {
return `La mesa ${numeroMesas} no
existe`;
 }
  
if (!mesa.ocupada) { return `La mesa ${numeroMesas} ya está
    libre`;
    }
     
     mesa.ocupada = false;
    reservas = reservas.filter(r => r.mesas !==
    numeroMesas);
    return `Reserva cancelada para la mesa
    ${numeroMesas}`;
     }
      
    // Ejemplo de uso
    console.log(verDisponibles());
    console.log(reservarMesas(1, "Juan Pérez", "2024-11-", "2024-11-30"));
    
    console.log(verDisponibles());
    console.log(cancelarReserva(1));
    console.log(verDisponibles());
