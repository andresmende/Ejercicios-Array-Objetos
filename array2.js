const estudiantes = [
    {nombre: "pedro", nota: 8.5},
    {nombre: "jose", nota: 6.5},
    {nombre: "valentina", nota: 9.0},
    {nombre: "luis", nota: 5.8},
    {nombre: "valeria", nota: 7.2}
   ];
   // Filtrar aprobados
   const aprobados = estudiantes
   .filter(estudiante => estudiante.nota >= 7)
    .map(estudiante => estudiante.nombre);
   console.log("Estudiantes aprobados:", aprobados);
     
   const noaprobados = estudiantes
   .filter(estudiante => estudiante.nota <= 6.9)
    .map(estudiante => estudiante.nombre);
   console.log("Estudiantes no aprobados:", noaprobados);