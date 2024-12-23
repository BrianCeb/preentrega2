const Alumnos = function(nombre, promedio, legajo){
    this.nombre= nombre
    this.promedio = promedio
    this.legajo = legajo
}
let alumno1  = new Alumnos("Pedro",7.5,20)
let alumno2  = new Alumnos("Pedro",6.5,20)
let alumno3  = new Alumnos("Pedro",5.5,20)
let alumno4  = new Alumnos("Pedro",3,20)
let lista = [alumno1,alumno2,alumno3,alumno4,]



let alumnos = [
    { nombre: "Marcos", promedio: 7.5, legajo: 123 },
    { nombre: "Maria", promedio: 6.8, legajo: 456 },
    { nombre: "Juan", promedio: 5.4, legajo: 789 },
];

function agregarAlumno(nombre, promedio, legajo) {
    alumnos.push({ nombre, promedio, legajo });
    alert(`Alumno ${nombre} agregado exitosamente.`);
}

function buscarAlumnoPorNombre() {
    const nombre = prompt("Ingresa el nombre del alumno que deseas buscar:");
    const alumnosFiltrados = alumnos.filter(al => al.nombre.toLowerCase() === nombre.toLowerCase());

    if (alumnosFiltrados.length > 0) {
        const alumno = alumnosFiltrados[0]; 
        alert(`Alumno encontrado: ${alumno.nombre}, Promedio: ${alumno.promedio}`);
        alert(alumno.promedio >= 6 ? "El alumno está aprobado." : "El alumno no está aprobado.");
    } else {
        alert(`Alumno con el nombre "${nombre}" no encontrado.`);

        const agregar = confirm("Deseas agregar este alumno?");
        if (agregar) {
            const nuevoPromedio = parseFloat(prompt("Ingresa el promedio del alumno:"));
            const nuevoLegajo = parseInt(prompt("Ingresa el legajo del alumno:"));
            if (isNaN(nuevoPromedio) || isNaN(nuevoLegajo) || nombre == "") {
                alert("por favor ingrese valores validos")
                return
            }
            agregarAlumno(nombre, nuevoPromedio, nuevoLegajo);
        }
    }
}

// Ejemplo de uso
console.log("Lista inicial de alumnos:", alumnos);
buscarAlumnoPorNombre(); 
console.log("Lista actualizada de alumnos:", alumnos);
