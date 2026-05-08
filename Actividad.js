// 1. Declaración de variables
let paciente = "César Adrián Morado Rodríguez";
let edad = 33;
let genero = "Masculino";
let fechaIngreso = new Date();
let esUrgencia = true;
let motivoConsulta = "Dolor de cabeza";
let temperatura = 37.5;
let presionSanguinea = "120/80";
let nivelConsciencia = "Consciente";
let alergias = ["Penicilina", "Aspirina", "Amoxicilina"];
let tratamientoAnterior = ["Analgésicos"];
let dadoDeAlta = false;

// 2. Función tradicional
function procesarPaciente() {
    let indiceTratamiento = 0;
    console.log("Iniciando proceso de atención médica para el paciente: " + paciente + " Fecha de Ingreso: " + fechaIngreso);

    if (esUrgencia && temperatura > 38) {
        console.log("Alerta: El paciente requiere atención médica inmediata.");
    } else {
        console.log("El paciente se encuentra estable.");
    }
}

// 3. Funcion Flecha otro analisis
const diagnosticarPaciente = () => {
    let indiceTratamiento = 0;
    console.log("Analizando al paciente: " + paciente + " Edad: " + edad + " años " + "genero: " + genero + " Presión Sanguínea: " + presionSanguinea);
    switch (motivoConsulta) {
        case "Fiebre":
            console.log("El paciente tiene fiebre.");
            break;
        case "Dolor de cabeza":
            console.log("El paciente tiene dolor de cabeza.");
            break;
        default:
            console.log("El paciente tiene otro motivo de consulta.");
    }

    for (let i = 0; i < alergias.length; i++) {
        if (alergias[i] === "Penicilina") {
            console.log("El paciente tiene alergia a la penicilina.");
        }
        else if (alergias[i] === "Aspirina") {
            console.log("El paciente tiene alergia a la aspirina.");
        }
        else if (alergias[i] === "Amoxicilina") {
            console.log("El paciente tiene alergia a la amoxicilina.");
        }
        else {
            console.log("El paciente no tiene alergias.");
        }
    }

    while (indiceTratamiento < tratamientoAnterior.length) {
        console.log("Tratamiento: " + tratamientoAnterior[indiceTratamiento]);
        indiceTratamiento++;
    }

}
// 4. Llamada a las funciones
procesarPaciente();
diagnosticarPaciente();

dadoDeAlta = true;
if (dadoDeAlta) {
    console.log("\n--- ESTATUS FINAL ---");
    console.log("El paciente " + paciente + " ha sido atendido correctamente y es dado de alta.");
}


